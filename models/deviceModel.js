const mongoose = require('mongoose');

// Define the schema for the Device model
const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  last_updated: {
    type: Date,
    default: Date.now
  },
  // Additional fields specific to each device type can be added here
});

// Create the Device model
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
