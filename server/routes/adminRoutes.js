const express = require('express');
const { getAdmins, getAdmin, postAdmin, putAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, getAdmins);

router.get('/:id', verify, getAdmin);

router.post('/', verify, postAdmin);

router.put('/:id', verify, putAdmin);

router.delete('/:id', verify, deleteAdmin);

module.exports = router;