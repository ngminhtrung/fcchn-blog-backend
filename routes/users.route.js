import express from 'express';
import userCtrl from '../controllers/users.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list)

  /** POST /api/users - Create new user */
  // .post(validate(paramValidation.createUser), userCtrl.create);
  .post(userCtrl.create);

export default router;