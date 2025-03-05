import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    itemCategory: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    generic: {
      type: String,
    },
    abbreviation: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    potency: {
      type: String,
    },
    weightVolume: {
      type: String,
    },
    accountingUnit: {
      type: String,
    },
    attribute: {
      type: String,
    },
    itemNature: {
      type: String,
    },
    dosageType: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

export const Item = mongoose.model("Item", itemSchema);
