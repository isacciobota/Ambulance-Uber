const Doctor = require('../models/Doctor');
const Paramedic = require('../models/Paramedic');
const Admin = require('../models/Admin');

const searchUsername = async (username) => {
    let usernameExist = await Doctor.findOne({username: username});
    if (usernameExist)
        return new Error('Username already exists');

    usernameExist = await Paramedic.findOne({username: username});
    if (usernameExist)
        return new Error('Username already exists');

    usernameExist = await Admin.findOne({username: username});
    if (usernameExist)
        return new Error('Username already exists');
    
    return null;
};

module.exports.searchUsername = searchUsername;