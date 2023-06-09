/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserTouristAttractions', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Users',
            key: 'id',
          },
        },
      },
      touristAttractionsId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'TouristAttractions',
            key: 'id',
          },
        },
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
    await queryInterface.dropTable('UserTouristAttractions');
  },
};
