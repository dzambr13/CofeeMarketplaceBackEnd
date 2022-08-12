"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("members", "password", "passwordDigest");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("members", "passwordDigest", "password");
  },
};
