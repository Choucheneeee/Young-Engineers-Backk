const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child", // Reference to the Children collection
      required: true,
    },
    amount: {
      type: Number,
      required: true, // Amount paid
    },
    date: {
      type: Date,
      required: true, // Date of payment (ISODate)
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "credit card", "bank transfer"], // Payment method
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
