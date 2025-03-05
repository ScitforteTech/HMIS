import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    adminUser: {
        type: String,
        required: true,
      },
    adminPassword: {
        type: String,
        required: true,
    },
    DBUser: {
        type: String,
        required: true,
    },
    DBPassword: {
        type: String,
        required: true,
    },
        
    logo: {
        type: String, 
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Client = mongoose.model('Client', clientSchema);
