const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET all services
router.get('/', serviceController.getAllServices);

// GET a single service by ID
router.get('/:id', serviceController.getServiceById);

module.exports = router;
