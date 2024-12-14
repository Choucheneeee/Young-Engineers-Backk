const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const path = require('path');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/apidoc', express.static(path.join(__dirname, 'apidoc')));


// Database Connection
connectDB();

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/api/users", userRoutes);

// Export app
module.exports = app;
