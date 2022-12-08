import { model, Schema } from 'mongoose';

const BlogPostSchema = new Schema({
	title: { type: String },
	description: { type: String },
	content: { type: String },
	account: { type: Schema.Types.ObjectId, ref: 'account', required: true },
	createdAt: { type: Date },
	updatedAt: { type: Date },
});

export const BlogPost = model('blogPost', BlogPostSchema);
