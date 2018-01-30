import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';

/**
 * Comment Schema
 */
const CommentSchema = new mongoose.Schema({

  content: {type: String, required: true},
  authorID: {type: Number, required: true},
  postID: {type: Number, required: true},
  createdAt: { type: Date, default: Date.now }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
CommentSchema.method({
});

/**
 * Statics
 */
CommentSchema.statics = {
  /**
   * Get comment
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
   * List comments in descending order of 'createdAt' timestamp.
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
 * @typedef Comment
 */
export default mongoose.model('Comment', CommentSchema);
