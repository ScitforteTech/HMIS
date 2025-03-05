import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
      unique: true,
    },
    currentAddress: {
      type: String,
      required: true,
    },
    currentCity: {
      type: String,
      required: true,
    },
    currentDistrict: {
      type: String,
      required: true,
    },
    currentProvince: {
      type: String,
      required: true,
    },
    currentCountry: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    permanentCity: {
      type: String,
      required: true,
    },
    permanentDistrict: {
      type: String,
      required: true,
    },
    permanentProvince: {
      type: String,
      required: true,
    },
    permanentCountry: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true,
    },
    profilePicture: {
      type: String, 
    },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);
