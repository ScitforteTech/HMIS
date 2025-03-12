import mongoose from 'mongoose';

const StandardOrganizationSchema = mongoose.Schema(
  {
    StdOrganization: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StandardOrganization = mongoose.model('StandardOrganization', StandardOrganizationSchema);
