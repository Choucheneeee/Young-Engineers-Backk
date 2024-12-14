const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

//Routes
const userRoutes = require("./routes/userRoutes");
const childRoutes = require("./routes/childRoutes");
const groupRoutes = require("./routes/groupRoutes");
const programRoutes = require("./routes/programRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/api/users", userRoutes);
app.use("/api/children", childRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/payments", paymentsRoutes);

// Export app
module.exports = app;
