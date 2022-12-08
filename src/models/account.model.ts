import { model, Schema } from 'mongoose';

const AccountSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: 'true' },
  name: { type: String, unique: true },
  displayPhoto: { type: String },
  bio: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const Account = model('account', AccountSchema);
