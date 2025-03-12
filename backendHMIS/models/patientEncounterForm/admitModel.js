import mongoose from "mongoose";

const AdmitSchema = new mongoose.Schema(
  {
    ward: {
      type: String,
      required: true,
      trim: true,
    },
    room: {
      type: String,
      required: true,
      trim: true,
    },
    bed: {
      type: String,
      required: true,
      trim: true,
    },
    speciality: {
      type: String,
      required: true,
      trim: true,
    },
    recommendedDuration: {
      type: Number, 
      required: true,
      default: 0,
    },
    patientCondition: {
      type: String,
      enum: ["Normal", "Critical", "Stable", "Under Observation"],
      required: true,
    },
    physicianOrder: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Admit = mongoose.model("Admit", AdmitSchema);
