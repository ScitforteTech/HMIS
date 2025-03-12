import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema(
  {
    leaveType: {
      type: String,
      required: true,
      trim: true,
    },
    fromDateTime: {
      type: Date,
      required: true,
    },
    toDateTime: {
      type: Date,
      required: true,
    },
    leaveCategory: {
      type: String,
      enum: ["Full Day", "Half Day"],
      required: true,
    },
    admissionType: {
      type: String,
      trim: true,
    },
    admissionDate: {
      type: Date,
    },
    dischargeDate: {
      type: Date,
    },
    reason: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Leave = mongoose.model("Leave", LeaveSchema);
