const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Point, CheckPoint }) {
      this.hasMany(Point, { foreignKey: 'userId' });
      this.belongsTo(CheckPoint, {foreignKey: 'userId'})
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
