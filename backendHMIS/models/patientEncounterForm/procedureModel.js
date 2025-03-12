import mongoose from "mongoose";

const ProcedureSchema = new mongoose.Schema(
  {
    procedureType: {
      type: String,
      required: true,
      trim: true,
    },
    organizationUnit: {
      type: String,
      required: true,
      trim: true,
    },
    procedure: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "Medium",
    },
    frequency: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Procedure = mongoose.model("Procedure", ProcedureSchema);
