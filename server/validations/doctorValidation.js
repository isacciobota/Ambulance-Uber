// Validation
const Joi = require('@hapi/joi');

// Add doctor validation
const addDoctorValidation = (data) => {
    const doctorSchema = Joi.object({
        name: Joi.string().min(4).required(),
        username: Joi.string().min(6).max(24).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().required().email(),
        hospital: Joi.string().required(),
        active: Joi.boolean(),
        token: Joi.string().allow(null, '')
    });

    return doctorSchema.validate(data);
};

module.exports.addDoctorValidation = addDoctorValidation;