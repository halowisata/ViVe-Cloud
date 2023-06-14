const InvariantError = require('../../exceptions/InvariantError');
const { SavedTouristAttractionPayloadSchema } = require('./schema');

const SavedTouristAttractionsValidator = {
  validateSavedTouristAttractionPayload: (payload) => {
    const validationResult = SavedTouristAttractionPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SavedTouristAttractionsValidator;
