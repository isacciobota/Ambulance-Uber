const Patient = require('../models/Patient');
const patientValidation = require('../validations/patientValidation');

const addPatientService = async (data) => {
    const {error} = patientValidation.addPatientValidation(data);
    if (error)
        return new Error(error.details[0].message);

    const {name, sex, age, description, pictures} = data;

    const patient = new Patient({
        name,
        sex,
        age,
        description,
        pictures
    });

    return patient;
};

module.exports.addPatientService = addPatientService;
