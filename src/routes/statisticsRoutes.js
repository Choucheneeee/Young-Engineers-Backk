const express = require("express");
const router = express.Router();
const statisticsController = require("../controllers/statisticsController");

// Get statistics (Programs, Groups, Children count)
router.get("/", statisticsController.getStatistics);

module.exports = router;
