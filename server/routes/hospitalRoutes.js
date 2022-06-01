const express = require('express');
const { getHospitals, getHospital, postHospital, putHospital, deleteHospital } = require('../controllers/hospitalController');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, getHospitals);

router.get('/:id', verify, getHospital);

router.post('/', verify, postHospital);

router.put('/:id', verify, putHospital);

router.delete('/:id', verify, deleteHospital);

module.exports = router;