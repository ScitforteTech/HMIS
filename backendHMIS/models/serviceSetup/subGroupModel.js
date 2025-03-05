import mongoose from "mongoose";

const subGroupSchema = new mongoose.Schema(
  {
    subGroupName: { 
      type: String, 
      required: true, 
      unique: true 
    },
    groupId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Group", required: true 
    }, 
  },
  { 
    timestamps: true 
  }
);

export const SubGroup = mongoose.model("SubGroup", subGroupSchema);
