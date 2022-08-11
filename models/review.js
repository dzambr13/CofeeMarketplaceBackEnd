'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
      Review.belongsTo(models.Product,{
        foreignKey:'productId'
      })
      Review.belongsTo(models.Member,{
        foreignKey:'memberId'
      })
    }
  }
  Review.init(
    {
      textBody: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'products',
          key: 'id'
        }
      },
      memberId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'members',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
