const mongoose = require('mongoose');

// Define the schema for the Device model
const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  isOn: {
    type: String,
    required: true
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

// Create the Device model
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
