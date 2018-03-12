import Promise from 'bluebird';
import mongoose, { Schema } from 'mongoose';

/**
 * Post Schema
 */
const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
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
PostSchema.method({
});

/**
 * Statics
 */
PostSchema.statics = {
  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<post[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .populate('user', 'username')
      .exec()
      .then((posts) => ({
        limit: parseInt(limit),
        skip: parseInt(skip),
        data: posts
      }));
  }
};

/**
 * @typedef post
 */
export default mongoose.model('Post', PostSchema);
