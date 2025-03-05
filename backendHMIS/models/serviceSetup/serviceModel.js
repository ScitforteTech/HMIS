import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    subGroupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubGroup",
      required: true,
    },
    serviceName: {
        type: String,
        required: true,
        trim: true,
      },  
    type: {
      type: String,
      enum: ["Type1", "Type2", "Type3"], 
      default: "Type1",
    },
  },
  { timestamps: true }
);

export const Service = mongoose.model("Service", ServiceSchema);

