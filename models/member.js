'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {

    static associate(models) {
      Member.belongsToMany(models.Roaster, {
        foreignKey: 'memberId',
        through: models.RoasterMember,
        as: 'members'
      })
      Member.hasMany(models.Review,{
        foreignKey:'memberId'
      })
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
