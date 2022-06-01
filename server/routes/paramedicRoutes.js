const express = require('express');
const { getParamedics, getParamedic, postParamedic, putParamedic, deleteParamedic } = require('../controllers/paramedicController.js');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, getParamedics);

router.get('/:id', verify, getParamedic);

router.post('/', verify, postParamedic);

router.put('/:id', verify, putParamedic);

router.delete('/:id', verify, deleteParamedic);

module.exports = router;