'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Roaster, {
        foreignKey: 'roasterId'
      })
      Product.hasMany(models.Review, {
        foreignKey: 'productId',
        as: 'products'
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      units: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      texture: DataTypes.STRING,
      productImageUrl: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      roasterId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'roasters',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products'
    }
  )
  return Product
}
