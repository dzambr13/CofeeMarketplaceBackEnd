const Router = require("express").Router();
const controller = require("../controllers/MemberController");

Router.get("/", controller.ShowAllMembers);

Router.get("/:member_id", controller.ShowMemberById);

Router.post("/newmember", controller.AddNewMember);

Router.put("/:member_id/edit", controller.UpdateMember);

module.exports = Router;
