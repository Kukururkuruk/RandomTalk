/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@admin.ru",
          password: await bcrypt.hash("admin", 10),
          rating: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "one",
          email: "one@one.ru",
          password: await bcrypt.hash("one", 10),
          rating: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "2",
          email: "2@2",
          password: await bcrypt.hash("2", 10),
          rating: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
