/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          hashpass: await bcrypt.hash("admin", 10),
          email: "admin@admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "1",
          hashpass: await bcrypt.hash("1", 10),
          email: "1@1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "2",
          hashpass: await bcrypt.hash("2", 10),
          email: "2@2",
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
