const { Member } = require("../models");

// create a member

// get a member

const ShowAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.findAll();
    res.send(allMembers);
  } catch (error) {
    throw error;
  }
};

// delete a member

// update a member

// get all members

module.exports = {
  ShowAllMembers,
};
