const Joi = require("joi");

const registerSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    lastName: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),

    password: Joi.string()
        .min(8)
        .max(20)
        .required()
});

module.exports = {
    registerSchema
};