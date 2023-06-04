const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TouristAttraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TouristAttraction.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    rating: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'TouristAttraction',
  });
  return TouristAttraction;
};
