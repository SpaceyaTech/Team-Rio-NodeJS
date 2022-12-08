import { model, Schema } from 'mongoose';

export enum RolesEnum {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export type RoleType = 'USER' | 'MODERATOR' | 'ADMIN';

const RoleSchema = new Schema({
  name: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const Role = model('role', RoleSchema);
