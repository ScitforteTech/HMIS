import mongoose from "mongoose";

const FavoriteDiagnosisSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosisType: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoriteDiagnosis = mongoose.model("FavoriteDiagnosis",FavoriteDiagnosisSchema);
