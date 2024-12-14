const Attendance = require("../models/Attendance");

// Create attendance for a session
const createAttendance = async (req, res) => {
  try {
    const { childId, groupId, date, status } = req.body;

    // Check if the attendance entry already exists for the given child and group on the same date
    const existingAttendance = await Attendance.findOne({
      childId,
      groupId,
      date,
    });
    if (existingAttendance) {
      return res
        .status(400)
        .json({ message: "Attendance for this session already exists." });
    }

    // Create a new attendance record
    const newAttendance = new Attendance({
      childId,
      groupId,
      date,
      status,
    });

    // Save the attendance record to the database
    await newAttendance.save();
    res.status(201).json({
      message: "Attendance recorded successfully",
      attendance: newAttendance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all attendance records
const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate(
      "childId groupId"
    );
    res.status(200).json(attendanceRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get attendance for a specific child
const getAttendanceByChild = async (req, res) => {
  try {
    const childId = req.params.childId;
    const attendance = await Attendance.find({ childId }).populate("groupId");

    if (!attendance) {
      return res
        .status(404)
        .json({ message: "Attendance not found for this child." });
    }

    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get attendance for a specific group
const getAttendanceByGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const attendance = await Attendance.find({ groupId }).populate("childId");

    if (!attendance) {
      return res
        .status(404)
        .json({ message: "No attendance records found for this group." });
    }

    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update attendance for a session
const updateAttendance = async (req, res) => {
  try {
    const { status } = req.body;
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    res
      .status(200)
      .json({ message: "Attendance updated successfully", attendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete attendance by ID
const deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndDelete(req.params.id);

    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    res.status(200).json({ message: "Attendance deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createAttendance,
  getAllAttendance,
  getAttendanceByChild,
  getAttendanceByGroup,
  updateAttendance,
  deleteAttendance,
};
