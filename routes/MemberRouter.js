const Router = require("express").Router();
const controller = require("../controllers/MemberController");
const middleware = require("../middleware");

//Member routes
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





module.exports = Router;
