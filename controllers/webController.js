const axios = require("axios");

// GET Login Page
exports.getLoginPage = async (req, res) => {
  res.render("login", { pageTitle: "Login Page" });
};

// GET system access
exports.postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "password") {
    res.redirect("/services");
  } else {
    res.send("Invalid username or password");
  }
};

// GET Notifications Page
exports.getNotificationPage = async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "http://localhost:3000/api/notifications"
    );
    // Extract the data from the API response
    const notificationData = apiResponse.data;
    const lastTenNotifications = notificationData.slice(-10);
    res.render("notifications", {
      pageTitle: "Notifications",
      notifications: lastTenNotifications,
    });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching services data:", error);
    res.status(500).send("Error fetching services data");
  }
};

// GET Services Page
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

// GET Device Management Page
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

// GET EVent Logs Page
exports.getEventLogs = async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "http://localhost:3000/api/notifications"
    );

    // Extract the data from the API response
    const notificationData = apiResponse.data;

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

// Get Guest Access Page
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

// Turn Device ON or OFF
exports.updateDeviceStatus = async (req, res) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/devices/${req.params.id}/toggle-status`
    );
    const currentPath = req.originalUrl;
    if (currentPath.includes("/services/devicemanagement")) {
      res.redirect("/services/devicemanagement");
    } else {
      res.redirect("/services/guestaccess");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET emergency page
exports.getEmergency = async (req, res) => {
  res.render("emergency", { pageTitle: "Emergency" });
};

// Turn On all devices
exports.turnOnAllDevices = async (req, res) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/devices/turnOnAll`
    );
    if (response.data.message === "All devices turned on") {
      res.redirect("/services/devicemanagement");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Shut OFF all devices
exports.turnOffAllDevices = async (req, res) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/devices/shutAll`
    );
    if (response.data.message === "All devices shut down") {
      res.redirect("/services/devicemanagement");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
