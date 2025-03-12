import mongoose from "mongoose";

const OrganizationUnitShiftSchema = new mongoose.Schema(
  {
    organizationType: {
      type: String,
      required: true,
      trim: true,
    },
    organizationNature: {
      type: String,
      trim: true,
    },
    shiftName: {
      type: String,
      required: true,
      trim: true,
    },
    shiftType: {
      type: String,
      required: true,
      trim: true,
    },
    startTime: {
      hour: {
        type: Number,
        required: true,
        min: 0,
        max: 23,
      },
      minute: {
        type: Number,
        required: true,
        min: 0,
        max: 59,
      },
    },
    endTime: {
      hour: {
        type: Number,
        required: true,
        min: 0,
        max: 23,
      },
      minute: {
        type: Number,
        required: true,
        min: 0,
        max: 59,
      },
    },
    days: {
      type: [String],
      enum: ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      required: true,
    },
  },
  { timestamps: true }
);

export const OrganizationUnitShift = mongoose.model("OrganizationUnitShift", OrganizationUnitShiftSchema);
