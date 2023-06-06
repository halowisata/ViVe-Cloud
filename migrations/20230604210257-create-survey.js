/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveys', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users',
            key: 'id',
          },
        },
      },
      moodId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'moods',
            key: 'id',
          },
        },
      },
      budget: {
        type: Sequelize.STRING,
      },
      travelDistance: {
        type: Sequelize.STRING,
      },
      destinationCity: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surveys');
  },
};
