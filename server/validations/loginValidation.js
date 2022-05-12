const Joi = require('@hapi/joi');

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).max(24).required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

module.exports.loginValidation = loginValidation;