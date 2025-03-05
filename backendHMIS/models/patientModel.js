import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    alternatePhoneNumber: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emergencyContactName: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    alternateEmergencyContactNo: {
        type: String,
        required: true,
      },
    insurance: {
        type: Boolean,
        required: true,
      },
    insuranceProvider: {
        type: String,
        required: true,
      },
    insurancePolicyNumber: {
        type: String,
        required: true,
      },
    insuranceGroupNo: {
        type: String,
        required: true,
      },
    policyHolderName: {
        type: String,
        required: true,
      },
    policyHolderRelationship: {
        type: String,
        required: true,
      },
    nationalIdNo: {
        type: String,
        required: true,
      },
    passportNo: {
        type: String,
        required: true,
      },
    driverLicenseNo: {
        type: String,
        required: true,
      },
    photoId: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export const Patient = mongoose.model('Patient', patientSchema);
