const router = require("express").Router();
const controller = require("../controllers/ReviewController");
const middleware = require("../middleware");

router.get("/", controller.GetOneReview);
router.get("/", controller.CreateReview); //Add protection
router.get("/", controller.GetAllReviews);
router.get("/:review_id", controller.UpdateReview); //remove
router.get("/:review_id", controller.DeleteReview); //Add protection

module.exports = router;
