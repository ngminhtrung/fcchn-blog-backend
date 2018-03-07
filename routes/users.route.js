import express from 'express';
import userCtrl from '../controllers/users.controller';
import { validateJWT } from '../utils';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const router = express.Router(); // eslint-disable-line new-cap

// const options = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: 'MyS3cr3t'
// }

// passport.use(new JwtStrategy(options, function (payload, done) {
//   done(null, payload);
// }));

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list)

  /** POST /api/users - Create new user */
  // .post(validate(paramValidation.createUser), userCtrl.create);
  .post(userCtrl.create);

router.route('/:id')
  /** GET /api/users/:id - Get single user record */
  .get(userCtrl.read)
  .patch(userCtrl.update)

export default router;