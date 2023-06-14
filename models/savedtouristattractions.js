const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SavedTouristAttraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SavedTouristAttraction.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users',
          key: 'id',
        },
      },
    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'SavedTouristAttraction',
  });
  return SavedTouristAttraction;
};
