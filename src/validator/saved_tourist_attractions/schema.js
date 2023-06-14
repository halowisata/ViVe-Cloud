const Joi = require('joi');

const SavedTouristAttractionPayloadSchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string().required(),
  description: Joi.string().required(),
  rating: Joi.number().required(),
  lat: Joi.number().required(),
  lon: Joi.number().required(),
});

module.exports = { SavedTouristAttractionPayloadSchema };
