const { Member } = require("../models");
const Sequelize = require("sequelize");
const middleware = require("../middleware");
const Op = Sequelize.Op;

const AddNewMember = async (req, res) => {
  try {
    let newMemberInfo = {
      ...req.body,
    };
    const newMember = await Member.create(newMemberInfo);
    res.status(200).json(newMember);
  } catch (error) {
    throw error;
  }
};

const ShowAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.findAll();
    // res.send(200).json(allMembers)
    res.send(allMembers);
  } catch (error) {
    throw error;
  }
};
const ShowMemberById = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);
    const selectedMember = await Member.findByPk(memberId);
    // res.send(200).json(selectedMember);
    res.send(selectedMember);
  } catch (error) {
    throw error;
  }
};
const ShowMemberByName = async (req, res) => {
  try {
    let userName = req.body.query;
    let results = await Member.findAll({
      where: { userName: { [Op.like]: `%${userName}%` } },
    });
    res.send(200).json(results);
  } catch (error) {
    throw error;
  }
};
const UpdateMember = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);

    const memberToUpdate = await Member.update(req.body, {
      where: { id: memberId },
      returning: true,
    });
    res.send(200).json(memberToUpdate);
  } catch (error) {
    throw error;
  }
};
const DeleteMember = async (req, res) => {
  try {
    const memberId = parseInt(req.params.member_id);
    const memberToDelete = await Member.findByPk(memberId);
    await Member.destroy({
      where: { id: memberId },
    });
    res.status(200).json(memberToDelete);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  ShowAllMembers,
  ShowMemberById,
  ShowMemberByName,
  AddNewMember,
  UpdateMember,
  DeleteMember
};
