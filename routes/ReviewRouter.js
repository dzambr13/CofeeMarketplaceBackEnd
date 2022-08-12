const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetOneReview)
router.post('/', controller.CreateReview) //Add protection
router.put('/:review_id', controller.UpdateReview) //remove
router.delete('/:review_id', controller.DeleteReview) //Add protection

module.exports = router
