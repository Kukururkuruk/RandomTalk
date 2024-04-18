/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Points",
      [
        {
          theme: 'Драки с бомжами',
          cloth: 'Царские одеяния',
          longitude: '37.628447',
          latitude: '55.757237',
          status: false,
          userId:  1,
          clientId: null,
          agreed: false,
          reason: null,
          visibility: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: 'Кошечки',
          cloth: 'Шуба',
          longitude: '37.627826',
          latitude: '55.747022',
          status: false,
          userId:  2,
          clientId: null,
          agreed: false,
          reason: 'Блаблабла',
          visibility: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: 'Челмедведосвин',
          cloth: 'Голый',
          longitude: '37.618669',
          latitude: '55.763860',
          status: false,
          userId:  3,
          clientId: null,
          agreed: false,
          reason: null,
          visibility: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Points", null, {});
  },
};
