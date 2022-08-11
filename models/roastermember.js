'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoasterMember extends Model {

    static associate(models) {

    }
  }
  RoasterMember.init({
    roasterId: {                           
      type: DataTypes.INTEGER,        
      reference: {
        model: 'roasters',          
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
  }, {
    sequelize,
    modelName: 'RoasterMember',
    tableName: 'roasters_members'
  });
  return RoasterMember;
};