// Validation
const Joi = require('@hapi/joi');

// Add paramedic validation
const addParamedicValidation = (data) => {
    const paramedicSchema = Joi.object({
        name: Joi.string().min(4).required(),
        username: Joi.string().min(6).max(24).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().required().email(),
        token: Joi.string().allow(null, '')
    });

    return paramedicSchema.validate(data);
};

module.exports.addParamedicValidation = addParamedicValidation;