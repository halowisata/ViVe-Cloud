const { UserTouristAttraction } = require('../../../models');

class UserTouristAttractionsService {
  async addUserTouristAttraction(userId, touristAttractionId) {
    const addedUserTouristAttraction = await UserTouristAttraction.create({
      userId,
      touristAttractionId,
    });

    return {
      id: addedUserTouristAttraction.id,
      userId: addedUserTouristAttraction.userId,
      touristAttractionId: addedUserTouristAttraction.touristAttractionId,
      createdAt: addedUserTouristAttraction.createdAt,
    };
  }
}

module.exports = UserTouristAttractionsService;
