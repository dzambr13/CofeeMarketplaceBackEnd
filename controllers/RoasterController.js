const {Roaster}=require('../models')
const {Op} = require("sequelize")
const middleware=require('../middleware')

const Login=async(req,res)=>{
    try{
      const roaster=await Roaster.findOne({                     // <-- find a user with a matching email
          where:{email:req.body.email},
          raw:true
      })
      if(roaster && (await middleware.comparePassword(          // <-- if there is a user with a matching email
        roaster.passwordDigest, req.body.password))){           //     and the submitted password === hashed found password
          let payload={id:roaster.id,email:roaster.email}
          let token = middleware.createToken(payload)           // <-- create a JWT 
          return res.send({roaster:payload,token})
      }
      res.status(401).send({status:'Error',msg:'Unauthorized'})  
    }catch(error){throw error}
  }
  const Register=async (req,res)=>{
    try{
      const {email,password,firstName}=req.body                     // <-- send back user infor + password to be hashed
      let passwordDigest=await middleware.hashPassword(password)
      const roaster=await Roaster.create({email,passwordDigest,firstName})  // <-- create the user
      res.send(roaster)
    }catch(error){throw error}
  }


  const updatePassword=async (req,res)=>{
    try{
      const roaster=await Roaster.findOne({                    // <-- find user with matching email & password 
        where:{email:req.body.email}})
        if(roaster && (await middleware.comparePassword(       // <-- if submitted password === found password (hashed)
          roaster.dataValues.passwordDigest,
          req.body.oldPassword))
        ){
          let passwordDigest=await middleware.hashPassword(req.body.newPassword)    // then hash the new password & pass to user
          await roaster.updatePassword({passwordDigest})
          return res.send({status:'Success',msg:'Password updated'})
        } 
        res.status(401).send({status:'Error',msg:'Unauthorized'})
    }catch(error){throw error}
  }



const createRoaster=async (req,res)=>{
    try{
        const newRoaster=await Roaster.create()
        res.status(200).json(newRoaster)
    }catch(error){throw error}
}
const updateRoaster=async (req,res)=>{
    try{
        const {pk}=req.params
        let updatedRoaster=await Roaster.update(req.body,{
            where:{id:pk},returning:true})
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
    try {
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
        let results=await Roaster.findAndCountAll({
            where: {[Op.or]: [{userName},{businessName},{firstName}]}
        })
        res.status(200).json(results)
    }catch(error){throw error}
}

 




module.exports = {
    createRoaster,
    updateRoaster,
    getOneRoaster,
    getAllRoasters,
    deleteARoaster,
    findARoaster,  
    Login,
    Register,
    updatePassword
}



