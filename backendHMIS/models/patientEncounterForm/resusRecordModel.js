import mongoose from "mongoose";

const ResusRecordSchema = new mongoose.Schema(
  {
    oxygen: {
      type: String,
      required: true,
      trim: true,
    },
    noOfInjections: {
      type: String,
      trim: true, 
    },
    cprDuration: {
      type: String, 
      trim: true,
    },
    doseMg: {
      type: Number,
    },
    noOfCPRCycles: {
      type: Number,
      default: 0,
    },
    rosc: {
      type: String,
      trim: true,
    },
    roscAchievedIn: {
      type: String, // Example: "5 min"
      trim: true,
    },
    cardioVersion: {
      type: Boolean,
      default: false,
    },
    patientCondition: {
      type: String,
      enum: ["Stable", "Critical", "Recovering", "Deceased"],
      required: true,
    },
    nonInvasiveVentilation: {
      type: Boolean,
      default: false,
    },
    startTime: {
      type: Date,
    },
    inotropes: {
      type: String,
      trim: true,
    },
    doseKg: {
      type: Number,
    },
    instropesStartTime: {
      type: Date,
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const ResusRecord = mongoose.model("ResusRecord", ResusRecordSchema);
