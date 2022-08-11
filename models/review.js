'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Product)
      Review.belongsTo(models.Member)
      // define association here
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
