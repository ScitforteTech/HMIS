import mongoose from "mongoose";

const FavoritePreOpOrderSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    preOpOrderType: {
      type: String,
      required: true,
      trim: true,
    },
    preOpOrder: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoritePreOpOrder = mongoose.model("FavoritePreOpOrder", FavoritePreOpOrderSchema);
