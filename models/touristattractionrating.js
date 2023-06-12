const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TouristAttractionRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TouristAttractionRating.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users',
          key: 'id',
        },
      },
    },
    touristAttractionId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'touristattractions',
          key: 'id',
        },
      },
    },
    rating: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'TouristAttractionRating',
  });
  return TouristAttractionRating;
};
