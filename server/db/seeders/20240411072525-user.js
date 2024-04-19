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
          rating: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ЛегенларныйOne",
          email: "one@one.ru",
          password: await bcrypt.hash("one", 10),
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "НоскиМоейБабушки",
          email: "noski@noski.ru",
          password: await bcrypt.hash("noski", 10),
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "БобрКурва",
          email: "bobr@bobr.ru",
          password: await bcrypt.hash("bobr", 10),
          rating: 3.75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ЛюбительДракБомжей",
          email: "bomj@bomj.ru",
          password: await bcrypt.hash("bomj", 10),
          rating: 2.2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Дестроер777",
          email: "anus@anus.ru",
          password: await bcrypt.hash("anus", 10),
          rating: 4.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "НиколайВторой",
          email: "rsstrel@rsstrel.ru",
          password: await bcrypt.hash("rsstrel", 10),
          rating: 4.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Уличка",
          email: "umnichka@umnichka.ru",
          password: await bcrypt.hash("umnichka", 10),
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "КристинаФиона",
          email: "zhopa@zhopa.ru",
          password: await bcrypt.hash("zhopa", 10),
          rating: 3.14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "НикитосДушныйНос",
          email: "dushno@dushno.ru",
          password: await bcrypt.hash("dushno", 10),
          rating: 0.1111,
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
