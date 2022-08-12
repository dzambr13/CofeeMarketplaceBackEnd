const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetOneReview)
router.post('/', controller.CreateReview)
router.get('/', controller.GetAllReviews)
router.put('/:review/:id', controller.UpdateReview)
router.delete('/:review/:id', controller.DeleteReview)

module.exports = router
