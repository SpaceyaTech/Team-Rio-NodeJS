import { model, Schema } from 'mongoose';

const CommentSchema = new Schema({
  content: { type: String },
  blogPost: { type: Schema.Types.ObjectId, ref: 'blogPost', required: true },
  account: { type: Schema.Types.ObjectId, ref: 'account', required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const Comment = model('comment', CommentSchema);
