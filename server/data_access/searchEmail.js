const Doctor = require('../models/Doctor');
const Paramedic = require('../models/Paramedic');
const Admin = require('../models/Admin');

const searchEmail = async (email) => {
    let emailExist = await Doctor.findOne({email: email})
    if (emailExist)
        return new Error('Email already exists');

    emailExist = await Paramedic.findOne({email: email})
    if (emailExist)
        return new Error('Email already exists');

    emailExist = await Admin.findOne({email: email})
    if (emailExist)
        return new Error('Email already exists');
    
    return null;
};

module.exports.searchEmail = searchEmail;