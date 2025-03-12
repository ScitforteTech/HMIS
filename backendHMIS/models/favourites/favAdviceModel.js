import mongoose from "mongoose";

const FavoriteAdviceSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    adviceType: {
      type: String,
      required: true,
      trim: true,
    },
    advice: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoriteAdvice = mongoose.model("FavoriteAdvice", FavoriteAdviceSchema);
