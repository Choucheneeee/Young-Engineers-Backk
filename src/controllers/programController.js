const Program = require("../models/Program");

// Create a new program
const createProgram = async (req, res) => {
  try {
    const { name, duration, stages } = req.body;

    // Create a new program
    const newProgram = new Program({
      name,
      duration,
      stages,
    });

    // Save the program to the database
    await newProgram.save();
    res
      .status(201)
      .json({ message: "Program created successfully", program: newProgram });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all programs
const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific program by ID
const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json(program);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a program by ID
const updateProgram = async (req, res) => {
  try {
    const { name, duration, stages } = req.body;
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { name, duration, stages },
      { new: true } // Return the updated document
    );
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json({ message: "Program updated successfully", program });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a program by ID
const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json({ message: "Program deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProgram,
  getAllPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
};
