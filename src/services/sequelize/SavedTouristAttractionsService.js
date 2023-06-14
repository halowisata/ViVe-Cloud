const { SavedTouristAttraction } = require('../../../models');
const NotFoundError = require('../../exceptions/NotFoundError');

class SavedTouristAttractionsService {
  async addSavedTouristAttraction(userId, newTouristAttraction) {
    const {
      name, city, description, rating, lat, lon,
    } = newTouristAttraction;
    const addedSavedTouristAttraction = await SavedTouristAttraction.create({
      userId,
      name,
      city,
      description,
      rating,
      lat,
      lon,
    });

    return {
      id: addedSavedTouristAttraction.id,
      userId: addedSavedTouristAttraction.userId,
      name: addedSavedTouristAttraction.name,
      city: addedSavedTouristAttraction.city,
      description: addedSavedTouristAttraction.description,
      rating: addedSavedTouristAttraction.rating,
      lat: addedSavedTouristAttraction.lat,
      lon: addedSavedTouristAttraction.lon,
      createdAt: addedSavedTouristAttraction.createdAt,
    };
  }

  async getSavedTouristAttractions(userId) {
    const retrievedTouristAttractions = await SavedTouristAttraction.findAll({
      attributes: ['id', 'userId', 'name', 'city', 'description', 'rating', 'lat', 'lon'],
    });

    if (!retrievedTouristAttractions) {
      throw new NotFoundError(`tourist attractions with user id ${userId} not found`);
    }

    return retrievedTouristAttractions;
  }

  async deleteSavedTouristAttraction(userId, name) {
    await SavedTouristAttraction.destroy({ where: { userId, name } });
  }
}

module.exports = SavedTouristAttractionsService;
