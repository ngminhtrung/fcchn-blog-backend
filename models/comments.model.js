var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Comment Schema
 */
var CommentSchema = new Schema({
  content: {type: String, required: true},
  authorID: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  postID: {type: Schema.Types.ObjectId, ref: 'Post', required: true}
});

// Virtual for comment's url
CommentSchema
  .virtual('url')
  .get(function() {
    return '/' + this._id;
  })

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
