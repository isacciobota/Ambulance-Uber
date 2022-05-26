const Admin = require('../models/Admin');
const adminValidation = require('../validations/adminValidation');
const searchUsername = require('../data_access/searchUsername');
const searchEmail = require('../data_access/searchEmail');
const bcrypt = require('bcryptjs');

const addAdminService = async (data) => {
    // Validation

    const {error} = adminValidation.addAdminValidation(data);

    if (error)
        return new Error(error.details[0].message);

    const {name, username, password, email} = data;

    // Check if username/email already in the database
    const usernameExist = await searchUsername.searchUsername(username);
    if (usernameExist)
        return new Error('Username already exists');

    const emailExist = await searchEmail.searchEmail(email);
    if (emailExist)
        return new Error('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new Admin({
        name,
        username,
        password: hashedPassword,
        email
    });

    return admin;
};

module.exports.addAdminService = addAdminService;