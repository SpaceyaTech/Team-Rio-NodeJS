import mongoose from 'mongoose';

import config from '../config';

const { db } = config();

export const dbSetup = () => {
	mongoose.set('strictQuery', false);
	mongoose.connect(db.uri, (err) => {
		if (err) console.error('Error:', err);
		console.info('Info:', 'Connected to database');
	});
};

export * from './account.model';
export * from './blog.model';
export * from './comment.model';
export * from './reaction.model';
export * from './role.model';
export * from './user.model';
