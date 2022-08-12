const Router = require("express").Router();
const controller = require("../controllers/RoasterController");
const middleware = require("../middleware");

Router.get("/find", controller.findARoaster);
Router.put(
  "/update/:pk",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateRoaster
);
Router.get("/:pk", controller.getOneRoaster);
Router.get("/", controller.getAllRoasters);
Router.delete(
  "/delete/:pk",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteARoaster
);

Router.post("/login", controller.Login);
Router.post("/register", controller.Register);
Router.put(
  "/password-update",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePassword
);

module.exports = Router;
