'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckPoint extends Model {
    static associate({User, Point}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Point, {foreignKey: 'pointId'})
    }
  }
  CheckPoint.init({
    userId: DataTypes.INTEGER,
    pointId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CheckPoint',
  });
  return CheckPoint;
};