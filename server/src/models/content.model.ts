import { Types, model, Schema } from 'mongoose'

const ContentSchema = new Schema(
  {
    link: { type: String, required: true },
    type: { type: String, required: true }, // add enum as well
    title: { type: String, required: true },
    tag: { type: String, ref: 'Tag', required: true },
    userId: { type: Types.ObjectId, require: true, ref: 'User' }
  },
  { timestamps: true }
)

export const ContentModel = model('Content', ContentSchema)
