const Router = require("express").Router();

const MemberRouter = require("./MemberRouter");
// const ProductRouter = require("./ProductRouter");
// const ReviewRouter = require("./ReviewRouter");
// const RoasterRouter = require("./RoasterRouter");

Router.use("/members", MemberRouter);
// Router.use("/products", ProductRouter);
// Router.use("/reviews", ReviewRouter);
// Router.use("/roasters", RoasterRouter);

module.exports = Router;
