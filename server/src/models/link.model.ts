import { Schema, model } from 'mongoose'

const LinkSchema = new Schema(
  {
    hash: { type: String, required: true },
    userId: { type: String, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

export const LinkModel = model('Link', LinkSchema)
