import Comment from '../models/comments.model';

/**
 * Load all comments of post 
 */

exports.index = function(req, res) {
  res.send('Not IMPLEMENTED: List of comments')
}
 /**
  * Create a new comment for a post
  */

exports.create = function(req, res) {
    res.send('Not IMPLEMENTED: Comment create POST')
  }

/**
 * Edit a comment
 */
exports.update = function(req, res) {
  res.send('Not IMPLEMENTED: Comment edit PUT')
}

/**
 * Delete a comment
 */
exports.del = function(req, res) {
  res.send('Not IMPLEMENTED: Comment delete DELETE')
}