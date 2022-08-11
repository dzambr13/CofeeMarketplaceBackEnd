const Router = require("express").Router();
const controller = require("../controllers/MemberController");

Router.get("/", controller.ShowAllMembers);

module.exports = Router;
