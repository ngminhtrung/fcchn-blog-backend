import express from 'express';
import userCtrl from '../controllers/users.controller';
import { validateJWT } from '../utils';
import passport from 'passport';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(passport.authenticate('jwt', { session: false }), userCtrl.list)

  /** POST /api/users - Create new user */
  // .post(validate(paramValidation.createUser), userCtrl.create);
  .post(userCtrl.create);

router.route('/:id')
  /** GET /api/users/:id - Get single user record */
  .get(passport.authenticate('jwt', { session: false }), userCtrl.read)

  /** PATCH /api/users/:id - Update single user record */
  .patch(passport.authenticate('jwt', { session: false }), userCtrl.update)

export default router;