import mongoose from "mongoose";

const ReceivePatientSchema = new mongoose.Schema(
  {
    ward: {
      type: String,
      required: true,
      trim: true,
    },
    mrNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    admissionDateFrom: {
      type: Date,
      required: true,
    },
    admissionDateTo: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const ReceivePatient = mongoose.model("ReceivePatient", ReceivePatientSchema);
