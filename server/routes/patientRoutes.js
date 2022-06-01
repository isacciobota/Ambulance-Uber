const express = require('express');
const { getPatients, getPatient, postPatient, putPatient, deletePatient } = require('../controllers/patientController');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, getPatients);

router.get('/:id', verify, getPatient);

router.post('/', verify, postPatient);

router.put('/:id', verify, putPatient);

router.delete('/:id', verify, deletePatient);

module.exports = router;