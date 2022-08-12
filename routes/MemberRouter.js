const Router = require("express").Router();
const controller = require("../controllers/MemberController");
const middleware = require("../middleware");

Router.get("/search", controller.ShowMemberByName);

Router.get("/", controller.ShowAllMembers);
Router.get("/:member_id", controller.ShowMemberById);

Router.get("/search", controller.ShowMemberByName);

Router.put(
  "/:member_id/edit",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateMember
);
Router.delete(
  "/:member_id/delete",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteMember
);

Router.post("/login", controller.Login);
Router.post("/register", controller.Register);
Router.put("/password-update", controller.UpdatePassword);

module.exports = Router;
