const Joi = require('joi');

const SurveyPayloadSchema = Joi.object({
  mood: Joi.string().required(),
  budget: Joi.string().required(),
  travelDistance: Joi.string().required(),
  destinationCity: Joi.string().required(),
});

module.exports = { SurveyPayloadSchema };
