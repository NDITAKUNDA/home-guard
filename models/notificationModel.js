const mongoose = require('mongoose');

// Define the schema for the Notification model
const notificationSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    enum: ['Status Update', 'Warning'],
    default: 'Status Update'
  }
});

// Create the Notification model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
