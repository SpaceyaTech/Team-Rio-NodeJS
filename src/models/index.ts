import mongoose from 'mongoose';

import config from '../config';
import { Role, RolesEnum } from './role.model';

const { db } = config();

export const createRoles = () => {
  Role.estimatedDocumentCount({}, (err, count) => {
    if (err) console.error('Error:', err);
    const roles = Object.keys(RolesEnum).filter((role) => isNaN(Number(role)));
    if (count < roles.length) {
      roles.map((role) => {
        try {
          const newRole = new Role({
            name: role,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
          newRole.save();
          console.info('Info:', `Created ${role} role`);
          createRoles();
        } catch (err) {
          console.error('Error:', err);
        }
      });
    }
  });
};

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
