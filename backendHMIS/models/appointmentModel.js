import mongoose from 'mongoose';

const AppointmentSchema = mongoose.Schema(
  {
    appointment: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model('Appointment', AppointmentSchema);
