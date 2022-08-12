const Router=require('express').Router()
const controller=require('../controllers/RoasterController')

Router.get('/find',controller.findARoaster)
Router.post('/create',controller.createRoaster)
Router.put('/update/:pk',controller.updateRoaster)
Router.get('/:pk',controller.getOneRoaster)
Router.get('/',controller.getAllRoasters)
Router.delete('/delete/:pk',controller.deleteARoaster)

module.exports = Router




  