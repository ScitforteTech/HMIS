import mongoose from 'mongoose';

const AdviceSchema = mongoose.Schema(
  {
    adviceType: {
      type: String,
      required: true,
    },
    advice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Advice = mongoose.model('Advice', AdviceSchema);
