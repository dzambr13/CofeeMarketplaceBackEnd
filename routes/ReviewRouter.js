const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

<<<<<<< HEAD
router.get('/', controller.GetOneReview)
router.post('/', controller.CreateReview) //Add protection
router.put('/:review_id', controller.UpdateReview) //remove
router.delete('/:review_id', controller.DeleteReview) //Add protection
=======

router.get('/', controller.GetOneReview)
router.post('/', controller.CreateReview)
router.get('/', controller.GetAllReviews)
router.put('/:review/:id', controller.UpdateReview)
router.delete('/:review/:id', controller.DeleteReview)

router.get("/", controller.GetOneReview);
router.get("/", controller.CreateReview); //Add protection
router.get("/", controller.GetAllReviews);
router.get("/:review_id", controller.UpdateReview); //remove
router.get("/:review_id", controller.DeleteReview); //Add protection

>>>>>>> f8c6a67c63a47fb0b435ba1802fd6c6dc435e722

module.exports = router
