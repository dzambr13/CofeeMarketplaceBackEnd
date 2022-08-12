const router = require("express").Router();
const controller = require("../controllers/ProductController");
const middleware = require("../middleware");

router.get("/", controller.OneProduct);
router.get("/", controller.CreateProduct); //Add protection
router.get("/", controller.AllProducts);
router.get("/:product_id", controller.UpdateProduct); //Add protection
router.get("/:product_id", controller.DeleteProduct); //Add protection

module.exports = router;
