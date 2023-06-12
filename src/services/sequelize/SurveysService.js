const { Survey } = require('../../../models');

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
}

module.exports = SurveysService;
