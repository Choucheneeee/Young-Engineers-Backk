const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { auth, adminAuth } = require("../middleware/auth");

// Register a user
router.post("/register", UserController.registerUser);

// Login user
router.post("/login", UserController.loginUser);

// Get all users (Admin only)
router.get("/", adminAuth, UserController.getAllUsers);

// Delete a user by ID (Admin only)
router.delete("/:id", adminAuth, UserController.deleteUser);

module.exports = router;
