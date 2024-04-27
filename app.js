// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define routes
const deviceRoutes = require('./routes/deviceRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

app.use('/api/devices', deviceRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/notifications', notificationRoutes);

// Connect to MongoDB
const DB_URL = 'mongodb://127.0.0.1:27017/homeGuard'; // Update with your database URL
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to the database
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
