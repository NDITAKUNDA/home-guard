// Import the Device model
const Device = require('../models/deviceModel');

// Controller function to get all devices
exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single device by ID
exports.getDeviceById = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to turn on all device
exports.turnOnAllDevices = async (req, res) => {
  try {
    // Find all devices
    const devices = await Device.find();

    if (!devices || devices.length === 0) {
      return res.status(404).json({ message: 'No devices found' });
    }

    // Update isOn property for each device
    devices.forEach(async (device) => {
      device.isOn = 'on';
      await device.save();
    });

    // Send success response
    res.status(200).json({ message: 'All devices turned on' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// COntroller function to turn off all devices
exports.shutAllDevices = async (req, res) => {
  try {
    // Find all devices
    const devices = await Device.find();
    if (!devices || devices.length === 0) {
      return res.status(404).json({ message: 'No devices found' });
    }
    // Update isOn property for each device
    devices.forEach(async (device) => {
      device.isOn = 'off';
      await device.save();
    });
    // Send success response
    res.status(200).json({ message: 'All devices shut down' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Controller function to update an existing device status
exports.updateDeviceStatus = async (req, res) => {
  try {
    // Find the device by ID
    const device = await Device.findById(req.params.id);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
  
    // Toggle the isOn status of the device
    device.isOn = (device.isOn === 'on') ? 'off' : 'on';
  
    // Save the updated device
    const updatedDevice = await device.save();
  
    // Send the updated device as response
    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
