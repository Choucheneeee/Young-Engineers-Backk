const Child = require("../models/Child"); // Import the Child model

// Create a new child
const createChild = async (req, res) => {
  try {
    const { name, dateOfBirth, schoolLevel, groupId, parentId, stickers } =
      req.body;

    const newChild = new Child({
      name,
      dateOfBirth,
      schoolLevel,
      groupId,
      parentId,
      stickers,
    });

    await newChild.save();
    res.status(201).json(newChild);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all children
const getChildren = async (req, res) => {
  try {
    const children = await Child.find()
      .populate("groupId", "name")
      .populate("parentId", "name email");
    res.status(200).json(children);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific child by ID
const getChildById = async (req, res) => {
  try {
    const child = await Child.findById(req.params.id)
      .populate("groupId", "name")
      .populate("parentId", "name email");

    if (!child) {
      return res.status(404).json({ message: "Child not found" });
    }
    res.status(200).json(child);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a child
const updateChild = async (req, res) => {
  try {
    const child = await Child.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!child) {
      return res.status(404).json({ message: "Child not found" });
    }
    res.status(200).json(child);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a child
const deleteChild = async (req, res) => {
  try {
    const child = await Child.findByIdAndDelete(req.params.id);

    if (!child) {
      return res.status(404).json({ message: "Child not found" });
    }
    res.status(200).json({ message: "Child deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createChild,
  getChildren,
  getChildById,
  updateChild,
  deleteChild,
};
