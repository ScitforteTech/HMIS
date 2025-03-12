import mongoose from "mongoose";

const FavoriteInvestigationSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    investigationType: {
      type: String,
      required: true,
      trim: true,
    },
    investigation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoriteInvestigation = mongoose.model("FavoriteInvestigation", FavoriteInvestigationSchema);
