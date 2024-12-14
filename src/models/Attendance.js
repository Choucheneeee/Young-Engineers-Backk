const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child", // Reference to the Children collection
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group", // Reference to the Groups collection
      required: true,
    },
    date: {
      type: Date,
      required: true, // Date of the session (ISODate)
    },
    status: {
      type: String,
      enum: ["present", "absent"], // Status of attendance
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model("Attendance", AttendanceSchema);
