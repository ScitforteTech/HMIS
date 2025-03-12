import mongoose from "mongoose";

const NextVisitSchema = new mongoose.Schema(
  {
    nextVisitDate: {
      type: Date,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
    toDateTime: {
      type: Date,
      required: true,
    },
    nextVisitTime: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const NextVisit = mongoose.model("NextVisit", NextVisitSchema);
