const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

// GET login page
router.get('/', webController.getLoginPage);

// GET services page
router.get('/services', webController.getServicesPage);

router.post('/services', webController.postLogin);

// GET a service
router.get("/services/devicemanagement", webController.getDeviceManagement);

router.get("/services/eventlogs", webController.getEventLogs);

router.get("/services/guestaccess", webController.getGuestAccess);

router.get("/services/emergency", webController.getEmergency);

router.post("/services/devices/:id", webController.updateDeviceStatus);

module.exports = router;
