import mongoose from "mongoose";

const FeeStructureSchema = new mongoose.Schema(
  {
    feeGroup: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ["Date Time", "Priority"],
      required: true,
    },
    group: {
      type: String,
      trim: true,
    },
    subGroup: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    serviceRate: {
      type: Number,
      required: true,
    },
    urgentRate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const FeeStructure = mongoose.model("FeeStructure", FeeStructureSchema);
