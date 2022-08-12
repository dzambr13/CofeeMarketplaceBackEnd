const {Roaster}=require('../models')
const {Op} = require("sequelize")
const middleware=require('../middleware')

const Login=async(req,res)=>{
    try{
        const roaster=await Roaster.findOne({                    
            where:{email:req.body.email},
            raw:true
        })
      if(roaster && (await middleware.comparePassword(          
        roaster.passwordDigest, req.body.password))){           
            let payload={id:roaster.id,email:roaster.email}
            let token = middleware.createToken(payload)          
            return res.send({roaster:payload,token})
        }
        res.status(401).send({status:'Error',msg:'Unauthorized'})  
    }catch(error){throw error}
}
const Register=async (req,res)=>{   
    try{
        const {userName,businessName,email,firstName,lastName,password,logoImageUrl}=req.body                     
        let passwordDigest=await middleware.hashPassword(password)
        const roaster=await Roaster.create({
            userName,businessName,email,firstName,lastName,passwordDigest,logoImageUrl
        })  
        res.status(200).json(roaster)
    }catch(error){throw error}
  }

const updatePassword=async (req, res)=>{
    try{
        const roaster=await Roaster.findOne({where:{email:req.body.email}})
        if(
        roaster &&
        (await middleware.comparePassword(
          roaster.dataValues.passwordDigest,
          req.body.oldPassword
        ))
    ){
        let passwordDigest = await middleware.hashPassword(req.body.newPassword)
        await roaster.update({ passwordDigest })
        res.status(200).json({status:'Success',msg:'Password Updated'})
    }
    res.status(401).send({status:'Error',msg:'Invalid Credentials'})
    }catch(error){throw error}
}

const updateRoaster=async (req,res)=>{
    try{
        const {pk}=req.params
        let updatedRoaster=await Roaster.update(req.body,{where:{id:pk},returning:true})
        res.status(200).json(updatedRoaster) 
    }catch(error){throw error}
}
const getOneRoaster=async (req,res)=>{
    try{
        const {pk}=req.params
        const foundRoaster=await Roaster.findByPk(pk)
        res.status(200).json(foundRoaster)
    }catch(error){throw error}
}
const getAllRoasters=async (req,res)=>{
    try{
        const allRoasters=await Roaster.findAll()
        res.status(200).json(allRoasters)
    }catch(error){throw error}
}
const deleteARoaster=async (req,res)=>{
    try{
        const {pk}=req.params
        const deleletedRoaster=await Roaster.findByPk(pk)
        let msg = Object.assign({},deleletedRoaster)
        await Roaster.destroy({where:{id:pk}})
        res.status(200).json({
            alert:`Delete Roaster with an ID of ${pk}`,
            destroyed:msg
        })  
    }catch(error){throw error}
}
const findARoaster=async (req,res)=>{
    try{
        let userName=req.body.query
        let businessName=req.body.query
        let firstName=req.body.query
        let results=await Roaster.findAndCountAll({where: {[Op.or]: [{userName},{businessName},{firstName}]}})
        res.status(200).json(results)
    }catch(error){throw error}
}

module.exports = {
    updateRoaster,
    getOneRoaster,
    getAllRoasters,
    deleteARoaster,
    findARoaster,  
    Login,
    Register,
    updatePassword
}



