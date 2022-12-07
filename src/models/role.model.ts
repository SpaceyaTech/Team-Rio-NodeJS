import { model, Schema } from 'mongoose';

const RoleSchema = new Schema({
	name: { type: String },
	createdAt: { type: Date },
	updatedAt: { type: Date },
});

export const Role = model('role', RoleSchema);
