const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = `${process.env.APP_SECRET}`;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  // <--- hashing password
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};
const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword);
  return passwordMatch;
};
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
};
const verifyToken = (req, res, next) => {
  const { token } = res.locals;
  try {
    let payload = jwt.verify(token, APP_SECRET);
    if (payload) {
      return next();
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  }
};
const stripToken = (req, res, next) => {
  // console.log("Token value: ", res);
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  }
};

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword,
};
