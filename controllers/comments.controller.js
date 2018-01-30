import Comment from '../models/comments.model';
import bcrypt from 'bcrypt';

/**
 * Load comment and append to req.
 */
function load(req, res, next, id) {
  Comment.get(id)
    .then((comment) => {
      req.comment = comment; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get comment
 * @returns {Comment}
 */
function get(req, res) {
  return res.json(req.comment);
}

/**
 * Create new comment
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
  const { username, password, email } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds)
    .then(hash => new User({
        username,
        password: hash,
        email
      }))
    .then(user => user.save())
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  let { skip, limit } = req.query;
  User.list({ skip, limit })
    .then(data => res.json(data))
    .catch(err => next(err))
}

export default { load, get, create, list };
