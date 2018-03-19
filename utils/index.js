import bcrypt from 'bcrypt';
import errors from '@feathersjs/errors';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import User from '../models/users.model';

export const generateJWT = (userId) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ userId }, 'MyS3cr3t', (err, token) => { // the secret key should be moved to config file
      if (err) {
        return reject(err)
      }
      else return resolve(token);
    });
  })
}

export const verifyJwt = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'MyS3cr3t', (err, payload) => {
      if (err) return reject(err);
      else return resolve(payload);
    });
  });
}