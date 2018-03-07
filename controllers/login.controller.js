import User from '../models/users.model';
import bcrypt from 'bcrypt';
import errors from '@feathersjs/errors';

/**
 * Find user data via id
 */
function login(req, res, next) {
  res.send('Test login controller');
}

export default { login };
