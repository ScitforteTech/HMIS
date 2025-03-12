import mongoose from "mongoose";

const GlasgowComaScaleSchema = new mongoose.Schema(
  {
    eyeOpeningResponse: {
      type: String,
      required: true,
      trim: true,
    },
    verbalResponse: {
      type: String,
      required: true,
      trim: true,
    },
    motorResponse: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const GlasgowComaScale = mongoose.model("GlasgowComaScale", GlasgowComaScaleSchema );
