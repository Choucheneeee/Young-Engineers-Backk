const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

// Create a new program
router.post("/", programController.createProgram);

// Get all programs
router.get("/", programController.getAllPrograms);

// Get a program by ID
router.get("/:id", programController.getProgramById);

// Update a program by ID
router.put("/:id", programController.updateProgram);

// Delete a program by ID
router.delete("/:id", programController.deleteProgram);

module.exports = router;
