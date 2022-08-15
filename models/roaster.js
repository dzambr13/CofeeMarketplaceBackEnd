"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roaster extends Model {
    static associate(models) {
      Roaster.hasMany(models.Product, {
        foreignKey: "roasterId",
      }); 
      Roaster.belongsToMany(models.Member, {
        through: models.RoasterMember,
        as: "roasters",
        foreignKey: "roasterId",
      });
    }
  }
  Roaster.init(
    {
      userName: DataTypes.STRING,
      businessName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true
        }
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      logoImageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roaster",
      tableName: "roasters",
    }
  );
  return Roaster;
};
