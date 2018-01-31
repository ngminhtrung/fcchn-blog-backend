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
 * @typedef Comment
 */
export default mongoose.model('Comment', CommentSchema);
