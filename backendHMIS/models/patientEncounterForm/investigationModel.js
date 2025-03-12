import mongoose from "mongoose";

const InvestigationSchema = new mongoose.Schema(
  {
    investigationType: {
        type: String,
        required: true,
        trim: true,
    },
    organizationUnit: {
      type: String,
      required: true,
    },
    investigation: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "Medium",
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Investigation = mongoose.model("Investigation", InvestigationSchema);
