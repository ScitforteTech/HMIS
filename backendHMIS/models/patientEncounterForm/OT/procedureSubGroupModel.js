import mongoose from "mongoose";

const ProcedureSubGroupSchema = new mongoose.Schema(
  {
    subGroup: {
      type: String,
      required: true,
      trim: true,
    },
    procedure: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const ProcedureSubGroup = mongoose.model("ProcedureSubGroup", ProcedureSubGroupSchema);
