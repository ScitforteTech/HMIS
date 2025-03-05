import mongoose from "mongoose";

const itemCategorySchema = new mongoose.Schema(
  {
    itemCategory: {
      type: String,
      required: true,
      unique: true, 
    },
    abbreviation: {
      type: String,
      required: true,
      unique: true, 
    },
    alternative: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

export const ItemCategory = mongoose.model("ItemCategory", itemCategorySchema);
