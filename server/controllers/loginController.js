const loginValidation = require('../validations/loginValidation');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    // Validation
    const {error} = loginValidation.loginValidation(req.body);
    if (error)
        return res.status(409).send(error.details[0].message);
    
    const {username, password} = req.body;

    const user = await Doctor.findOne({username: username});

    if (!user)
        return res.status(400).send('Username or password is wrong.');

    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword)
        return res.status(400).send('password is wrong.');
    
    if (user instanceof Doctor)
        role = 'Doctor';

    // Create and assign a token
    const token = jwt.sign({_id: user._id, hospital: user.hospital, role: role}, process.env.TOKEN_SECRET);
    
    try {
        res.header('auth-token', token).status(200).send(token);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

module.exports = loginUser;