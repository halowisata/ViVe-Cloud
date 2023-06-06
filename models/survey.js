const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName: 'users',
          key: 'id',
        },
      },
    },
    moodId: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName: 'moods',
          key: 'id',
        },
      },
    },
    budget: DataTypes.STRING,
    travelDistance: DataTypes.STRING,
    destinationCity: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};
