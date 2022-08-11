'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roasters_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roasterId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'roasters',
          key: 'id'
        }
      },
      memberId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'members',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roasters_members')
  }
}
