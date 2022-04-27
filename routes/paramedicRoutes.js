const express = require('express');
const { getParamedics, getParamedic, postParamedic, putParamedic, deleteParamedic } = require('../controllers/paramedicController.js');
const router = express.Router();

router.get('/', getParamedics);

router.get('/:id', getParamedic);

router.post('/', postParamedic);

router.put('/:id', putParamedic);

router.delete('/:id', deleteParamedic);

module.exports = router;