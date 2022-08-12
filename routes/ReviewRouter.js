const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetOneReview)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
) //Add protection
router.delete(
  '/review/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
) //Add protection

module.exports = router
