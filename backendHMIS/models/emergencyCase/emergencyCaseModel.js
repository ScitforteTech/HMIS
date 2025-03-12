import mongoose from "mongoose";

const EmergencyCaseSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    pulse: {
      type: Number,
    },
    bloodPressure: {
      type: String,
    },
    respiratoryRate: {
      type: Number,
    },
    oxygenSaturation: {
      type: Number,
    },
    temperature: {
      type: Number,
    },
    painLevel: {
      type: Number,
      min: 0,
      max: 10,
    },
    levelOfConsciousness: {
      type: String,
    },
    capillaryRefillTime: {
      type: Number,
    },
    bloodGlucoseLevel: {
      type: Number,
    },
    severityLevel: {
      type: String,
      enum: ["Mild", "Moderate", "Severe", "Critical"],
    },
    medication: {
      type: String,
    },
    tests: {
      type: String,
    },
    treatment: {
      type: String,
    },
    diagnosis: {
      type: String,
    },
    instructions: {
      type: String,
    },
    referTo: {
      type: String,
    },
    refferalReason: {
      type: String,
    },
    surgeryType: {
      type: String,
    },
    recoveryStatus: {
      type: String,
      enum: ["Recovering", "Stable", "Critical", "Discharged"],
    },
    room: {
      type: String,
    },
    preOpNotes: {
      type: String,
    },
    postOpNotes: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const EmergencyCase = mongoose.model("EmergencyCase", EmergencyCaseSchema);
