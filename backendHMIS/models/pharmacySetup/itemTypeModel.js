import mongoose from "mongoose";

const itemTypeSchema = new mongoose.Schema(
  {
    itemCategory: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const ItemType = mongoose.model("ItemType", itemTypeSchema);
