const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Create attendance for a session
router.post("/", attendanceController.createAttendance);

// Get all attendance records
router.get("/", attendanceController.getAllAttendance);

// Get attendance for a specific child
router.get("/child/:childId", attendanceController.getAttendanceByChild);

// Get attendance for a specific group
router.get("/group/:groupId", attendanceController.getAttendanceByGroup);

// Update attendance for a session
router.put("/:id", attendanceController.updateAttendance);

// Delete attendance by ID
router.delete("/:id", attendanceController.deleteAttendance);

module.exports = router;
