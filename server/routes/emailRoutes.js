const express = require('express');
const checkEmail = require('../controllers/emailController');
const router = express.Router();

router.post('/email', checkEmail);

module.exports = router;