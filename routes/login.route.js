import express from 'express';
import loginCtrl from '../controllers/login.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** POST /api/login - login user */
  .post(loginCtrl.login);

export default router;