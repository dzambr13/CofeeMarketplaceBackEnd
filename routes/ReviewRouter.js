const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetOneReview)
router.post('/', controller.CreateReview) //Add protection
router.delete('/:review_id', controller.DeleteReview) //Add protection

module.exports = router
