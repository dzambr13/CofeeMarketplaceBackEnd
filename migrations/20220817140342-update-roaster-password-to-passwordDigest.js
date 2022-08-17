"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("roasters", "password", "passwordDigest");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("roasters", "passwordDigest", "password");
  },
};
