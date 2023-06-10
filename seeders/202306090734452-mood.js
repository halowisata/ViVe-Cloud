/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Moods', [
      {
        id: 'mood-1',
        name: 'Happy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'mood-2',
        name: 'Calm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'mood-3',
        name: 'Sad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'mood-4',
        name: 'Angry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Moods', null, {});
  },
};
