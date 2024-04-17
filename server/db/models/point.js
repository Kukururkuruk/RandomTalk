'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate({User, CheckPoint, Ban}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.hasMany(CheckPoint, {foreignKey: 'pointId'})
      this.hasMany(Ban, {foreignKey: 'pointId'})
    }
  }
  Point.init({
    theme: DataTypes.STRING,
    cloth: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    img: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
    agreed: DataTypes.BOOLEAN,
    reason: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};