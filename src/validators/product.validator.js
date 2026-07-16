const Joi = require("joi");

const createProductSchema = Joi.object({

    name: Joi.string()
        .trim()
        .required(),

    description: Joi.string()
        .trim()
        .required(),

    price: Joi.number()
        .min(0)
        .required(),

    category: Joi.string()
        .required(),

    brand: Joi.string()
        .required(),

    stock: Joi.number()
        .min(0)
        .default(0),

    images: Joi.array()
        .items(Joi.string()),

    ratings: Joi.number()
        .min(0)
        .max(5)
});

module.exports = {
    createProductSchema
};