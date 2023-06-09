const Joi = require('joi');

const UserTouristAttractionPayloadSchema = Joi.object({
  touristAttractionId: Joi.string().required(),
});

module.exports = { UserTouristAttractionPayloadSchema };
