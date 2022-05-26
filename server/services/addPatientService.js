const Patient = require('../models/Patient');
const PatientValidation = require('../validations/PatientValidation');
const searchUsername = require('../data_access/searchUsername');
const searchEmail = require('../data_access/searchEmail');
const bcrypt = require('bcryptjs');

const addPatientService = async (data) => {
    // Validation
    const {error} = doctorValidation.addPatientValidation(data);
    if (error)
        return new Error(error.details[0].message);

    const {name, sex, age, description, pictures} = data;

    // Check if username/email already in the database
    /*const usernameExist = await searchUsername.searchUsername(username);
    if (usernameExist)
        return new Error('Username already exists');

    const emailExist = await searchEmail.searchEmail(email);
    if (emailExist)
        return new Error('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
 */
    const patient = new Patient({
        name,
        sex,
        age,
        description,
        pictures
    });

    return patient;
};

module.exports.addDoctorService = addDoctorService;