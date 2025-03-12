import mongoose from "mongoose";

const RecommendationSchema = new mongoose.Schema(
  {
    speciality: {
      type: String,
      required: true,
      trim: true,
    },
    operationDate: {
      type: Date,
      required: true,
    },
    consultant: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosis: {
      type: String,
      trim: true,
    },
    otRoom: {
      type: String,
      required: true,
      trim: true,
    },
    bloodProduct: {
      type: String,
      trim: true,
    },
    anesthesiaType: {
      type: String,
      required: true,
      trim: true,
    },
    anesthesist: {
      type: String,
      required: true,
      trim: true,
    },
    bloodRequired: {
      type: Boolean,
      default: false,
    },
    preAssessment: {
      type: Boolean,
      default: false,
    },
    quantityUnit: {
      type: String,
      trim: true,
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Recommendation = mongoose.model("Recommendation", RecommendationSchema);
