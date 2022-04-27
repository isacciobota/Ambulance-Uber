const express = require('express');
const { getDoctors, getDoctor, postDoctor, putDoctor, deleteDoctor } = require('../controllers/doctorController');
const router = express.Router();

router.get('/', getDoctors);

router.get('/:id', getDoctor);

router.post('/', postDoctor);

router.put('/:id', putDoctor);

router.delete('/:id', deleteDoctor);

module.exports = router;