import mongoose from "mongoose";

const ShiftTypeSchema = new mongoose.Schema(
  {  
    shiftT: {
      type: String,
      enum: ["Morning", "Evening"], 
      default: "Morning",
    },
  },
  { timestamps: true }
);

export const ShiftType = mongoose.model("ShiftType", ShiftTypeSchema);

