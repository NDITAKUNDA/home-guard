const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

// GET login page
router.get('/', webController.getLoginPage);

// GET notifications
router.get('/notifications', webController.getNotificationPage);

// GET Live feed
router.get('/services/livefeed', (req, res) => {
    res.redirect("http://192.168.230.1/html/");
});

// GET services page
router.get('/services', webController.getServicesPage);

router.post('/services', webController.postLogin);

// GET a service
router.get("/services/devicemanagement", webController.getDeviceManagement);

router.get("/services/eventlogs", webController.getEventLogs);

router.get("/services/guestaccess", webController.getGuestAccess);

router.get("/services/emergency", webController.getEmergency);

router.post("/services/devicemanagement/devices/:id", webController.updateDeviceStatus);

router.post("/services/guestaccess/devices/:id", webController.updateDeviceStatus);

// Turn ON all devices 
router.post("/services/devicemanagement/turnon", webController.turnOnAllDevices);

// SHut OFF all devices
router.post("/services/devicemanagement/turnoff", webController.turnOffAllDevices);

module.exports = router;
