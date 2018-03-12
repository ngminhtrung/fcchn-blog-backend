import User from '../models/users.model';
import bcrypt from 'bcrypt';
import errors from '@feathersjs/errors';
import logger from '../config/logger';
import { generateJWT } from '../utils';

/**
 * Login user
 */
function login(req, res, next) {
  // get username and password from req.body
  const { username, password: plainPassword } = req.body;
  let userId;
  User.findByUsername(username)
    .then(user => {
      userId = user._id;
      return user.compareBcryptPassword(plainPassword, user.password)
    })
    .then(() => generateJWT(userId))
    .then(token => {
      res.status(200);
      res.json({ token })
    })
    .catch(err => next(err))
  // validate username and password
  // if valid, create JWT and send it back to user
  // if invalid, send error back to user
}

export default { login };
