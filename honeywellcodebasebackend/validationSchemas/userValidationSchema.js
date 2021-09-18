const Joi = require('@hapi/joi');

exports.loginSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
});
