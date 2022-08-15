const router = require('express').Router()

const controller = require('../controllers/AuthController')

const middleware = require('../middleware')

/* auth for both */
router.post('/login',controller.Login)           // works ( in back end & front end )
router.post('/register',controller.Register)     // works ( in back end & front end )

router.post('/update',middleware.stripToken,middleware.verifyToken,controller.UpdatePassword)
router.get('/session',middleware.stripToken,middleware.verifyToken,controller.CheckSession)

module.exports = router
