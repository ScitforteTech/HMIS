import mongoose from "mongoose";

const diagnosisSchema = new mongoose.Schema(
  {
    diagnosis: {
      type: String,
      required: true,
    },
    chapter: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

export const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);
