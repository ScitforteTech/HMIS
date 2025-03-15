import mongoose from "mongoose";

const PatientAppointmentSchema = new mongoose.Schema(
  {
    complaint: {
      type: String,
      required: true,
      trim: true,
    },
    doctor: {
      type: String,
      required: true,
      trim: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    doctorShift: {
      type: String,
      required: true,
      trim: true,
    },
    doctorSession: {
      type: String,
      required: true,
      trim: true,
    },
    appointmentTime: {
      type: String,
      required: true,
      trim: true,
    },
    appointmentType: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      required: true,
    },
    remarks: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const PatientAppointment = mongoose.model("PatientAppointment", PatientAppointmentSchema);
