import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: {
        values: ['pending', 'in-progress', 'finished'],
        message: '{VALUE} no es un estado permitido',
      },
      default: 'pending',
    },
    area: {
      type: String,
      enum: ['development', 'marketing', 'finance', 'strategy'],
      default: 'development',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)
