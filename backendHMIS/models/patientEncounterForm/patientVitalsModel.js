import mongoose from 'mongoose';

const patientVitalsSchema = mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    pulse: {
      type: Number,
      required: true,
    },
    bloodPressure: {
      type: String,
      required: true,
    },
    respiratoryRate: {
      type: Number,
      required: true,
    },
    oxygenSaturation: {
      type: Number,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    painLevel: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    levelOfConsciousness: {
      type: String,
      required: true,
    },
    capillaryRefillTime: {
      type: Number,
      required: true,
    },
    bloodGlucoseLevel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PatientVitals = mongoose.model('PatientVitals', patientVitalsSchema);
