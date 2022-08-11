"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roaster.hasMany(models.Product, {
        foreignKey: "roasterId",
      }); // define association here
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
