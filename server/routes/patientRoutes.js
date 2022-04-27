const express = require('express');
const { getPatients, getPatient, postPatient, putPatient, deletePatient } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getPatients);

router.get('/:id', getPatient);

router.post('/', postPatient);

router.put('/:id', putPatient);

router.delete('/:id', deletePatient);

module.exports = router;