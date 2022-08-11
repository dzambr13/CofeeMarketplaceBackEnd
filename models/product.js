'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.belongsTo(models.Roaster, {        // foreign key on both parent and child 
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
      roasterId: {                              // only in child's init 
        type: DataTypes.INTEGER,                // id data type 
        reference: {
          model: 'roasters',                    // table name 
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
