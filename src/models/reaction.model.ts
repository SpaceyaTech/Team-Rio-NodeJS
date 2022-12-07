import { model, Schema } from 'mongoose';

export enum ReactionsEnum {
	UPVOTE = 'UPVOTE',
	DOWNVOTE = 'DOWNVOTE',
}

export type ReactionType = 'UPVOTE' | 'DOWNVOTE';

const ReactionSchema = new Schema({
	type: { type: String, required: true },
	blogPost: { type: Schema.Types.ObjectId, ref: 'blogPost' },
	comment: { type: Schema.Types.ObjectId, ref: 'comment' },
	account: { type: Schema.Types.ObjectId, ref: 'account' },
	createdAt: { type: Date },
	updatedAt: { type: Date },
});

export const Reaction = model('reaction', ReactionSchema);
