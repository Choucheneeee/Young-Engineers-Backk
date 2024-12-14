const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name of the stage (e.g., "Stage 1")
    },
    description: {
      type: String,
      required: true, // Description of the stage
    },
    completedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Child", // Reference to the Children collection
      },
    ],
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' for each stage
);

const ProgramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name of the program (e.g., "Bricks Challenge")
    },
    duration: {
      type: String,
      required: true, // Duration of the program (e.g., "36 weeks")
    },
    stages: [StageSchema], // List of stages in the program
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' for the program
  }
);

module.exports = mongoose.model("Program", ProgramSchema);
