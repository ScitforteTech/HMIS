import mongoose from "mongoose";

const genericSchema = new mongoose.Schema(
  {
    generic: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate generics
      trim: true, // Removes leading/trailing spaces
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const Generic = mongoose.model("Generic", genericSchema);
