const express = require('express');
const path = require('path');
const app = require("./src/app"); // Your app configuration file
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Serve API documentation
app.use('/apidoc', express.static(path.join(__dirname, 'apidoc')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
