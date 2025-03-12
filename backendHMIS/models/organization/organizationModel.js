import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    organizationUnit: {
      type: String,
      required: true,
    },
    organizationType: {
      type: String,
      required: true,
    },
    organizationNature: {
      type: String,
      required: true,
    },
    specialty: {
        type: String,
        ref: "Specialty",
    },
    region: {
      type: String,
      ref: "Region",
      required: true,
    },
    category: {
        type: String,
        ref: "Specialty",
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    phone1: {
      type: String,
      required: true,
    },
    phone2: {
      type: String,
    },
    fax: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    travelingTimeDays: {
      type: Number,
      default: 0,
    },
    travelingTimeHours: {
      type: Number,
      default: 0,
    },
    country: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Organization = mongoose.model("Organization", OrganizationSchema);
