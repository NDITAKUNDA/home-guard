const mongoose = require('mongoose');

// Define the schema for the Service model
const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actions: {
    type: [String],
    required: true
  }
});

// Create the Service model
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
