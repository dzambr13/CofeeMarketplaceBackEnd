const { Member } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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

// find a member by name

const ShowMemberByName = async (req, res) => {
  try {
    //   res.send({...req.body});

    let userName = req.body.query;
    let results = await Member.findAll({
      where: { userName },
      // Gets error "TypeError: s.replace is not a function":
      //   where: { [Op.like]: { userName: `${userName}` } },

      //Get error "Error: Invalid value { userName: 'JavaFellow90' }"
      //   where: { [Op.like]: [{ userName: userName }] },
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
};
