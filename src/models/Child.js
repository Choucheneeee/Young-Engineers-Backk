const mongoose = require("mongoose");

// Sticker schema definition
const StickerSchema = new mongoose.Schema({
  model: { type: String, required: true }, // Name of the model (e.g., "Carrousel")
  earnedAt: { type: Date, required: true }, // Date when the sticker was earned
});

// Child schema definition
const ChildSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    schoolLevel: {
      type: String,
      required: false, // School level is optional
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group", // Reference to the Group collection
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User collection (role: parent)
      required: true,
    },
    stickers: [StickerSchema], // Array of stickers
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model("Child", ChildSchema);
