const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// GET all devices
router.get('/', deviceController.getAllDevices);

// GET a single device by ID
router.get('/:id', deviceController.getDeviceById);

module.exports = router;
