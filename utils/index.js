import bcrypt from 'bcrypt';
import errors from '@feathersjs/errors';
import jwt from 'jsonwebtoken';

export const compareBcrypt = (plainPassword, hash) => {
  return bcrypt.compare(plainPassword, hash)
    .then(result => {
      if (result) return Promise.resolve();
      else return Promise.reject(new errors.NotAuthenticated);
    })
}

export const generateJWT = (userId) => {
  // the scret key should be moved to config file
  return new Promise((resolve, reject) => {
    jwt.sign({ userId }, 'MyS3cr3t', (err, token) => {
      console.log('???');
      if (err) {
        console.log('err: ', err);
        return reject(err)
      }
      else return resolve(token);
    });
  })
}