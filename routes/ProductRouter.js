const router = require("express").Router();
const controller = require("../controllers/ProductController");
const middleware = require("../middleware");

router.get("/:id", controller.OneProduct);
router.post(
  "/create",

  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProduct
); //Add protection
router.get("/", controller.AllProducts);
router.put(
  "/update/:pk",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProduct
); //Add protection
router.delete(
  "/delete/:pk",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProduct
); //Add protection
module.exports = router;
