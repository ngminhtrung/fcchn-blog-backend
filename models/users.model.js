import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';

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
}, 
{
  timestamps: true,
  toObject: {
    transform: (doc, ret) => {
      delete ret.password;
    }
  }
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
  read(id) {
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

  create(user) {
    return new this(user).save()
      .then(createdUser => createdUser);
  },

  update(id, update) {
    return this.findByIdAndUpdate(id, update, { new: true })
      .exec()
      .then(updatedUser => updatedUser)
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
