'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate({User, CheckPoint}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.hasMany(CheckPoint, {foreignKey: 'pointId'})
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
    rating: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};