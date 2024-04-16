'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ban extends Model {
    static associate({User, Point}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Point, {foreignKey: 'pointId'})
    }
  }
  Ban.init({
    userId: DataTypes.INTEGER,
    pointId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ban',
  });
  return Ban;
};