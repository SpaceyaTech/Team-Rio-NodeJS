import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  phoneNumber: { type: String },
  password: { type: String },
  role: { type: Schema.Types.ObjectId, ref: 'role', required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const User = model('user', UserSchema);
