import mongoose from "mongoose";

const FavoriteProcedureSchema = new mongoose.Schema(
  {
    favouriteName: {
      type: String,
      required: true,
      trim: true,
    },
    procedureType: {
      type: String,
      required: true,
      trim: true,
    },
    procedure: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const FavoriteProcedure = mongoose.model("FavoriteProcedure", FavoriteProcedureSchema);
