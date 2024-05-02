const axios = require("axios");

// Controller function to get all devices
exports.getLoginPage = async (req, res) => {
  res.render("login", { pageTitle: "Login Page" });
};

exports.getServicesPage = async (req, res) => {
  try {
    const apiResponse = await axios.get("http://localhost:3000/api/services");

    // Extract the data from the API response
    const servicesData = apiResponse.data;

    // Render your services page and pass the data to it
    res.render("services", { pageTitle: "Services", services: servicesData });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching services data:", error);
    res.status(500).send("Error fetching services data");
  }
};

exports.getDeviceManagement = async (req, res) => {
  try {
    const apiResponse = await axios.get("http://localhost:3000/api/devices");

    // Extract the data from the API response
    const devicesData = apiResponse.data;

    res.render("devicemanagement", {
      pageTitle: "Device Management",
      devices: devicesData,
    });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching services data:", error);
    res.status(500).send("Error fetching services data");
  }
};

exports.getEventLogs = async (req, res) => {
  try {
    const apiResponse = await axios.get("http://localhost:3000/api/notifications");

    // Extract the data from the API response
    const notificationData= apiResponse.data;

    res.render("eventlogs", {
      pageTitle: "Event Logs",
      notifications: notificationData,
    });
    console.log(notificationData);
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching services data:", error);
    res.status(500).send("Error fetching services data");
  }
};

exports.getGuestAccess = async (req, res) => {
  try {
    const apiResponse = await axios.get("http://localhost:3000/api/devices");

    // Extract the data from the API response
    const devicesData = apiResponse.data;

    res.render("guestaccess", {
      pageTitle: "Guest Access",
      devices: devicesData,
    });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching services data:", error);
    res.status(500).send("Error fetching services data");
  }
};

exports.getEmergency = async (req, res) => {
  res.render("emergency", { pageTitle: "Emergency" });
};
