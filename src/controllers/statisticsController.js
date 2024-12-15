const Program = require("../models/Program");
const Group = require("../models/Group");
const Child = require("../models/Child");
const User = require("../models/User");

// Get statistics for Programs, Groups, and Children
const getStatistics = async (req, res) => {
  try {
    // Get the count of Programs
    const programCount = await Program.countDocuments();

    // Get the count of Groups
    const groupCount = await Group.countDocuments();

    // Get the count of Children
    const childCount = await Child.countDocuments();

    // Get the count of User
    const UserCount = await User.countDocuments();

    // Return the statistics in response
    res.status(200).json({
      programCount,
      groupCount,
      childCount,
      UserCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching statistics" });
  }
};

module.exports = {
  getStatistics,
};
