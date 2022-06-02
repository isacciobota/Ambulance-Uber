// Validation
const Joi = require('@hapi/joi');

// Add patient validation
const addPatientValidation = (data) => {
    const patientSchema = Joi.object({
        name: Joi.string().min(4).required(),
        sex: Joi.string().min(1).max(7).required(),
        age: Joi.string().required(),
        description: Joi.string().required(),
        hospital: Joi.string().required(),
        pictures: Joi.string()
    });

    return patientSchema.validate(data);
};

module.exports.addPatientValidation = addPatientValidation;