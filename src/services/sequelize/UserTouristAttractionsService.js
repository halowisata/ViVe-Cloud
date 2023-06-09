const { nanoid } = require('nanoid');
const { UserTouristAttraction } = require('../../../models');

class UserTouristAttractionsService {
  async addUserTouristAttraction(userId, touristAttractionId) {
    const id = `user_tourist_attraction-${nanoid(16)}`;
    const addedUserTouristAttraction = await UserTouristAttraction.create({
      id,
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
