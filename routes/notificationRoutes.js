const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// GET all notifications
router.get('/', notificationController.getAllNotifications);

// GET a single notification by ID
router.get('/:id', notificationController.getNotificationById);

module.exports = router;
