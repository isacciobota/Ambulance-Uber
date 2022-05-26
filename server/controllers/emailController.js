const loginValidation = require('../validations/loginValidation');
const Doctor = require('../models/Doctor');
const Paramedic = require('../models/Paramedic');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const checkEmail = async (req, res) => {
    
    const {username, email} = req.body;
    console.log(username);

    var user = await Doctor.findOne({username: username});
    console.log(user);
    if (!user){
        console.log(username);
        user = await Paramedic.findOne({username: username});
        console.log(user);
        }
   if(!user)
        user = await Admin.findOne({username: username});
        if(!user)
        return res.status(400).send('Username does not exist');

    const validPassword = email == user.email;
    
    if (!validPassword)
        return res.status(400).send('email does not match username');
    
    if (user instanceof Doctor)
        role = 'Doctor';
    if (user instanceof Paramedic)
        role = 'Paramedic';
    if (user instanceof Admin)
        role = 'Admin';

    // Create and assign a token
    const token = jwt.sign({_id: user._id, role: role}, process.env.TOKEN_SECRET);
    
    try {
        res.header('auth-token', token).status(200).send(token);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

module.exports = checkEmail;