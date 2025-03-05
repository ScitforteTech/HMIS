import mongoose from "mongoose";

const unitSchema = new mongoose.Schema(
  {
    unit: {
       type: String, 
       required: true 
      },
    abbreviation: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String 
    },
  },
  { 
    timestamps: true 
  }
);

export const Unit = mongoose.model("Unit", unitSchema);
