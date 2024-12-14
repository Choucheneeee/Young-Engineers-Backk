const express = require("express");
const router = express.Router();
const childController = require("../controllers/childController");

// Create a new child
router.post("/", childController.createChild);

// Get all children
router.get("/", childController.getChildren);

// Get a specific child by ID
router.get("/:id", childController.getChildById);

// Update a child by ID
router.put("/:id", childController.updateChild);

// Delete a child by ID
router.delete("/:id", childController.deleteChild);

module.exports = router;
