const { nanoid } = require('nanoid');
const { Survey } = require('../../../models');

class SurveysService {
  async addSurvey(userId, newSurvey) {
    const {
      moodId, budget, travelDistance, destinationCity,
    } = newSurvey;
    const id = `survey-${nanoid(16)}`;
    const addedSurvey = await Survey.create({
      id,
      userId,
      moodId,
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
