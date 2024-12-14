const Group = require("../models/Group");

// Create a new group
const createGroup = async (req, res) => {
  try {
    const { name, schedule, programId } = req.body;

    // Create a new group
    const newGroup = new Group({
      name,
      schedule,
      programId,
    });

    // Save the group to the database
    await newGroup.save();
    res
      .status(201)
      .json({ message: "Group created successfully", group: newGroup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all groups
const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific group by ID
const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a group by ID
const updateGroup = async (req, res) => {
  try {
    const { name, schedule, programId } = req.body;
    const group = await Group.findByIdAndUpdate(
      req.params.id,
      { name, schedule, programId },
      { new: true } // Return the updated document
    );
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json({ message: "Group updated successfully", group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a group by ID
const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};
