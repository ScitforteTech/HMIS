import mongoose from "mongoose";

const FavoritePostOpOrderSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    postOpOrderType: {
      type: String,
      required: true,
      trim: true,
    },
    postOpOrder: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoritePostOpOrder = mongoose.model("FavoritePostOpOrder", FavoritePostOpOrderSchema);
