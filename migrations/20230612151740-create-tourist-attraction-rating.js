/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TouristAttractionRatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            key: 'id',
          },
        },
      },
      touristAttractionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'TouristAttractions',
            key: 'id',
          },
        },
      },
      rating: {
        allowNull: false,
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('TouristAttractionRatings');
  },
};
