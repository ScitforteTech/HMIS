import mongoose from "mongoose";

const DischargeSummarySchema = new mongoose.Schema(
  {
    diagnosis: {
      type: String,
      trim: true,
    },
    associatedDiagnosisAlerts: {
      type: String,
      trim: true,
    },
    presentComplaints: {
      type: String,
      trim: true,
    },
    clinicalFindings: {
      type: String,
      trim: true,
    },
    progressNotes:{
        type: String,
      },
    investigationRemarks: {
      type: String,
      trim: true,
    },
    adviceOnDischarge: {
      type: String,
      trim: true,
    },
    woundDescription: {
      type: String,
      trim: true,
    },
    dischargeType: {
       type: String,
       enum: ["Home", "Referred", "Against Medical Advice"],
       required: true,
    },
    nextVisit: {
      type: Date,
    },
    purpose: {
       type: String,
       trim: true,
    },
  },
  { timestamps: true }
);

export const DischargeSummary = mongoose.model( "DischargeSummary", DischargeSummarySchema);
