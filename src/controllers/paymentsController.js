const Payment = require("../models/Payment");

// Create a new payment record
const createPayment = async (req, res) => {
  try {
    const { childId, amount, date, paymentMethod } = req.body;

    // Create a new payment record
    const newPayment = new Payment({
      childId,
      amount,
      date,
      paymentMethod,
    });

    // Save the payment record to the database
    await newPayment.save();
    res
      .status(201)
      .json({ message: "Payment recorded successfully", payment: newPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all payment records
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("childId");
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get payments by childId
const getPaymentsByChild = async (req, res) => {
  try {
    const childId = req.params.childId;
    const payments = await Payment.find({ childId }).populate("childId");

    if (!payments) {
      return res
        .status(404)
        .json({ message: "No payments found for this child." });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get payments by date
const getPaymentsByDate = async (req, res) => {
  try {
    const date = req.params.date;
    const payments = await Payment.find({ date }).populate("childId");

    if (!payments) {
      return res
        .status(404)
        .json({ message: "No payments found for this date." });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a payment record
const updatePayment = async (req, res) => {
  try {
    const { amount, paymentMethod } = req.body;
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { amount, paymentMethod },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment updated successfully", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a payment record by ID
const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id; // Get the payment ID from the request parameters
    const payment = await Payment.findById(paymentId).populate("childId"); // Fetch the payment by its ID and populate the childId

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" }); // Handle the case where the payment doesn't exist
    }

    res.status(200).json(payment); // Send the payment data as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" }); // Handle errors
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentsByChild,
  getPaymentsByDate,
  updatePayment,
  deletePayment,
  getPaymentById,
};
