const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Point, CheckPoint, Ban}) {
      this.hasMany(Point, { foreignKey: 'userId' });
      this.hasMany(CheckPoint, {foreignKey: 'userId'})
      this.hasMany(Ban, {foreignKey: 'userId'})
    }
  }
  User.init(
    {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
