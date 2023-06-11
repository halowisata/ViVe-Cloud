const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(8).alphanum().required()
    .label('password'),
  confirmPassword: Joi.any().equal(Joi.ref('password')).required().label('confirm password')
    .options({ messages: { 'any.only': '{{#label}} does not match' } }),
});

module.exports = { UserPayloadSchema };
