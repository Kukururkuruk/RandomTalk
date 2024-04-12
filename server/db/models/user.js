const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Point, CheckPoint, Access }) {
      this.hasMany(Point, { foreignKey: 'userId' });
      this.hasMany(CheckPoint, {foreignKey: 'userId'})
      this.hasMany(Access, {foreignKey: 'clientId'})
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
