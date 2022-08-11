'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.belongsToMany(models.Roaster, {
        foreignKey: 'memberId',
        through: models.RoasterMember,
        as: 'members'
      })
      Member.hasMany(models.Review)
    }
  }
  Member.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      location: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Member',
      tableName: 'members'
    }
  )
  return Member
}
