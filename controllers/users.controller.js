import User from '../models/users.model';
import bcrypt from 'bcrypt';

/**
 * Find user data via id
 */
function read(req, res, next) {
  User.read(req.params.id)
    .then(user => res.json(user))
    .catch(e => next(e));
}

/**
 * Update user data via id
 */
function update(req, res, next) {
  const { id } = req.params;
  const update = req.body;

  User.update(id, update)
    .then(updatedUser => res.json(updatedUser))
    .catch(e => next(e));
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
  const { username, password, email } = req.body;
  const saltRounds = 10; // should be moved to config file later

  bcrypt.hash(password, saltRounds)
    .then(hash => ({ username, password: hash, email }))
    .then(userObj => User.create(userObj))
    .then(createdUser => res.json(createdUser))
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

export default { read, create, list, update };
