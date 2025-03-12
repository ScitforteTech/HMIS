import mongoose from "mongoose";

const PreOpOrderSchema = new mongoose.Schema(
  {
    PreOpOrder: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const PreOpOrder = mongoose.model("PreOpOrder", PreOpOrderSchema);
