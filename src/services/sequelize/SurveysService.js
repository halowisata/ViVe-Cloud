const { Survey } = require('../../../models');
const NotFoundError = require('../../exceptions/NotFoundError');

class SurveysService {
  async addSurvey(userId, newSurvey) {
    const {
      mood, budget, travelDistance, destinationCity,
    } = newSurvey;
    const addedSurvey = await Survey.create({
      userId,
      mood,
      budget,
      travelDistance,
      destinationCity,
    });

    return {
      id: addedSurvey.id,
      userId: addedSurvey.userId,
      moodId: addedSurvey.moodId,
      budget: addedSurvey.budget,
      travelDistance: addedSurvey.travelDistance,
      destinationCity: addedSurvey.destinationCity,
      createdAt: addedSurvey.createdAt,
    };
  }

  async getSurvey(userId) {
    const retrievedUser = await Survey.findOne({
      where: { userId },
      attributes: ['mood', 'budget', 'travelDistance', 'destinationCity'],
      order: [['createdAt', 'DESC']],
    });

    if (!retrievedUser) {
      throw new NotFoundError(`survey with user id ${userId} not found`);
    }

    return retrievedUser;
  }
}

module.exports = SurveysService;
