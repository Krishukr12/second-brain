import { model, Schema } from 'mongoose'

const TagsSchema = new Schema(
  {
    title: { type: String, required: true, unique: true }
  },
  { timestamps: true }
)

export const TagsModel = model('Tag', TagsSchema)
