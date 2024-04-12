'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Point}) {
      this.belongsTo(User, {foreignKey: 'clientId'})
      this.belongsTo(Point, {foreignKey: 'pointId'})
    }
  }
  Access.init({
    clientId: DataTypes.INTEGER,
    pointId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Access',
  });
  return Access;
};