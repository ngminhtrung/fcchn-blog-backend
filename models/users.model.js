import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { removePassword } from '../helpers/'

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

/**
 * Post hooks for UserSchema
 */
UserSchema.post('save', (doc, next) => {
  removePassword(doc);
  next();
});

UserSchema.post('findOne', (doc, next) => {
  removePassword(doc);
  next();
});

UserSchema.post('find', (doc, next) => {
  removePassword(doc);
  next();
});

UserSchema.post('findOneAndUpdate', (doc, next) => {
  removePassword(doc);
  next();
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
      .then(users => ({
        limit: parseInt(limit),
        skip: parseInt(skip),
        data: users
      }));
  }
};

/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
