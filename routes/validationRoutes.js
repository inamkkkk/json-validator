const express = require('express');
const validationController = require('../controllers/validationController');

const router = express.Router();

router.post('/validate', validationController.validateJson);

module.exports = router;