const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetOneReview)
router.get('/', controller.CreateReview)
router.get('/', controller.GetAllReviews)
router.get('/:review_id', controller.UpdateReview)
router.get('/:review_id', controller.DeleteReview)

module.exports = router
