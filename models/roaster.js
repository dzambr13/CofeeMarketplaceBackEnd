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
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
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
