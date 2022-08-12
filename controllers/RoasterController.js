const {Roaster}=require('../models')

/////

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
        const deleletedRoaster=await Roaster.destroy({where:{id:pk}})
        res.status(200).json({alert:`Delete Roaster with an ID of ${pk}`})  
    }catch(error){throw error}
}

module.exports = {
    createRoaster,
    updateRoaster,
    getOneRoaster,
    getAllRoasters,
    deleteARoaster
}



