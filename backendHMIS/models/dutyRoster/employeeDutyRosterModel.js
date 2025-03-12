import mongoose from "mongoose";

const EmployeeDutyRosterSchema = new mongoose.Schema(
  {
    organizationType: {
      type: String,
      required: true,
      trim: true,
    },
    organizationNature: {
      type: String,
      required: true,
      trim: true,
    },
    shiftType: {
      type: String,
      required: true,
      trim: true,
    },
    shiftName: {
      type: String,
      required: true,
      trim: true,
    },
    shiftTime: {
      start: {
        type: String,
        required: true,
        trim: true,
      },
      end: {
        type: String,
        required: true,
        trim: true,
      },
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
  },
  { timestamps: true }
);

export const EmployeeDutyRoster = mongoose.model("EmployeeDutyRoster", EmployeeDutyRosterSchema);
