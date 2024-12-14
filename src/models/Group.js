const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name of the group
    },
    schedule: {
      type: String,
      required: true, // Schedule of the group (e.g., "Monday 10:00 AM - 12:00 PM")
    },
    programId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program", // Reference to the Programs collection
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model("Group", GroupSchema);
