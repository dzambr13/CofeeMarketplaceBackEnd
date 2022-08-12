const Router = require("express").Router();
const controller = require("../controllers/MemberController");

Router.get("/", controller.ShowAllMembers);

Router.get("/:member_id", controller.ShowMemberById);

Router.get("/search", controller.ShowMemberByName);

Router.post("/newmember", controller.AddNewMember);

Router.put("/:member_id/edit", controller.UpdateMember);

Router.delete("/:member_id/delete", controller.DeleteMember);

module.exports = Router;
