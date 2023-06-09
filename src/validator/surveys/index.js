const InvariantError = require('../../exceptions/InvariantError');
const { SurveyPayloadSchema } = require('./schema');

const SurveysValidator = {
  validateSurveyPayload: (payload) => {
    const validationResult = SurveyPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SurveysValidator;
