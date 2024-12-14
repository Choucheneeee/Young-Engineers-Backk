const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

// Create a new payment record
router.post("/", paymentsController.createPayment);

// Get all payment records
router.get("/", paymentsController.getAllPayments);

// Get payments for a specific child
router.get("/child/:childId", paymentsController.getPaymentsByChild);

// Get payments for a specific date
router.get("/date/:date", paymentsController.getPaymentsByDate);

// Update a payment record
router.put("/:id", paymentsController.updatePayment);

// Delete a payment record by ID
router.delete("/:id", paymentsController.deletePayment);

module.exports = router;
