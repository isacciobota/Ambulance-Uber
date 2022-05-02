const loginValidation = require('../validations/loginValidation');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    // Validation
    const {error} = loginValidation(req.body);
    if (error)
        return res.status(409).send(error.details[0].message);
    
    const {username, password} = req.body;

    const user = await Doctor.findOne({username: username});

    if (!user)
        return res.status(400).send('Username or password is wrong.');

    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword)
        return res.status(400).send('password is wrong.');
    try {
        res.status(200).send('Logged in');
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

module.exports = loginUser;