import mongoose from "mongoose";

const FavoriteMedicationSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    medicationType: {
      type: String,
      required: true,
      trim: true,
    },
    medication: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoriteMedication = mongoose.model("FavoriteMedication", FavoriteMedicationSchema);
