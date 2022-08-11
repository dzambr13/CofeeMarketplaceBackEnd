const Router = require("express").Router();
const controller = require("../controllers/MemberController");

Router.get("/", controller.ShowAllMembers);

Router.get("/:member_id", controller.ShowMemberById);

Router.post("/newmember", controller.AddNewMember);

module.exports = Router;
