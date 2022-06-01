const express = require('express');
const { getDoctors, getDoctor, postDoctor, putDoctor, deleteDoctor } = require('../controllers/doctorController');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, getDoctors);

router.get('/:id', verify, getDoctor);

router.post('/', verify, postDoctor);

router.put('/:id', verify, putDoctor);

router.delete('/:id', verify, deleteDoctor);

module.exports = router;