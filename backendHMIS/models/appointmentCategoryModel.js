import mongoose from 'mongoose';

const appointmentCategorySchema = mongoose.Schema(
  {
    appointmentCategory: {
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

export const AppointmentCategory = mongoose.model('AppointmentCategory', appointmentCategorySchema);
