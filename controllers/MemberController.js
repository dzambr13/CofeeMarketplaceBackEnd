const { Member } = require("../models");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
    const member = await Member.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      member &&
      (await middleware.comparePassword(
        member.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = { id: member.id, email: member.email };
      let token = middleware.createToken(payload);
      return res.send({ member: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};
const Register = async (req, res) => {
  try {
    const { userName, email, password, firstName, lastName, location } =
      req.body;
    let passwordDigest = await middleware.hashPassword(password);
    const member = await Member.create({
      userName,
      email,
      passwordDigest,
      firstName,
      lastName,
      location,
    });
    res.send(member);
  } catch (error) {
    throw error;
  }
};
const UpdatePassword = async (req, res) => {
  try {
    const member = await Member.findOne({ where: { email: req.body.email } });
    if (
      member &&
      (await middleware.comparePassword(
        member.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword);

      await member.update({ passwordDigest });
      return res.send({ status: "Success", msg: "Password Updated" });
    }
    res.status(401).send({ status: "Error", msg: "Invalid Credentials" });
  } catch (error) {
    throw error;
  }
};

// create a member
// get a member
// delete a member
// update a member
// get all members

// create a member

const AddNewMember = async (req, res) => {
  try {
    let newMemberInfo = {
      ...req.body,
    };

    const newMember = await Member.create(newMemberInfo);
    res.send(newMember);
  } catch (error) {
    throw error;
  }
};

// get all members

const ShowAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.findAll();
    res.send(allMembers);
  } catch (error) {
    throw error;
  }
};

// get member by Id

const ShowMemberById = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);

    const selectedMember = await Member.findByPk(memberId);
    res.send(selectedMember);
  } catch (error) {
    throw error;
  }
};

const ShowMemberByName = async (req, res) => {
  try {
    let userName = req.body.query;
    // res.send(userName);
    let results = await Member.findAll({
      where: { userName: { [Op.like]: `%${userName}%` } },
    });
    res.send(results);
  } catch (error) {
    throw error;
  }
};
// update a member

const UpdateMember = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);

    const memberToUpdate = await Member.update(req.body, {
      where: { id: memberId },
      returning: true,
    });
    res.send(memberToUpdate);
  } catch (error) {
    throw error;
  }
};

// delete a member
const DeleteMember = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);

    const memberToDelete = await Member.findByPk(memberId);

    await Member.destroy({
      where: { id: memberId },
    });
    // res.send(`This user's account was deleted: ${memberToDelete}`);
    res.send(memberToDelete);
  } catch (error) {
    throw error;
  }
};
// get all members

module.exports = {
  ShowAllMembers,
  ShowMemberById,
  ShowMemberByName,
  AddNewMember,
  UpdateMember,
  DeleteMember,
  Login,
  Register,
  UpdatePassword,
};
