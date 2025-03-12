
import mongoose from "mongoose";

const MedicationSchema = new mongoose.Schema(
  {
    items: [
      {
        pharmacy: {
            type: String,
            required: true,
            trim: true,
        },
        items: {
            type: String,
            required: true,
            trim: true,
        },
        medicine: {
          type: String,
          required: true,
          trim: true,
        },
        dosage: {
          type: String,
          required: true,
        },
        frequency: {
          type: String,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
        route: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        specialInstructions: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Medication = mongoose.model("Medication", MedicationSchema);
