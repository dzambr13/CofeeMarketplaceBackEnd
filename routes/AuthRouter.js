const Router=require('express').Router()
const controller=require('../controllers/AuthController')
const middleware=require('../middleware')

Router.post('/login',controller.Login)
Router.post('/register',controller.Register)
Router.put('/password-update',controller.updatePassword)

module.exports=Router