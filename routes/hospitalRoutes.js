const express = require('express');
const { getHospitals, getHospital, postHospital, putHospital, deleteHospital } = require('../controllers/hospitalController');
const router = express.Router();

router.get('/', getHospitals);

router.get('/:id', getHospital);

router.post('/', postHospital);

router.put('/:id', putHospital);

router.delete('/:id', deleteHospital);

module.exports = router;