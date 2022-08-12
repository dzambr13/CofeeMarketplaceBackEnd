const Router = require("express").Router();
const controller = require("../controllers/RoasterController");
const middleware = require("../middleware");

Router.get("/find", controller.findARoaster);            // works
Router.put(
  "/update/:pk",
  middleware.stripToken,                                 // works
  middleware.verifyToken,
  controller.updateRoaster
);
Router.get("/:pk", controller.getOneRoaster);            // works
Router.get("/", controller.getAllRoasters);              // works
Router.delete(           
  "/delete/:pk",                                         // works
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteARoaster
);

Router.post("/login", controller.Login);                  // works
Router.post("/register", controller.Register);            // works
Router.put("/password-update",controller.updatePassword); // works

module.exports = Router;
