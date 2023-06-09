const InvariantError = require('../../exceptions/InvariantError');
const { UserTouristAttractionPayloadSchema } = require('./schema');

const UserTouristAttractionsValidator = {
  validateUserTouristAttractionPayload: (payload) => {
    const validationResult = UserTouristAttractionPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UserTouristAttractionsValidator;
