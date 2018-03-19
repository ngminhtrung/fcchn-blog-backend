import express from 'express';
import commentsController from '../controllers/comments.controller';
import passport from 'passport';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/comments	 - Get list of comments */
  .get(commentsController.index)

  /** POST /api/comments - Create new comment */
  .post(passport.authenticate('jwt', { session: false }), commentsController.create);

router.route('/:id')

  /** PUT /api/comments:id - Update a comment */
  .put(passport.authenticate('jwt', { session: false }), commentsController.update)

  /** PUT /api/comments:id - Delete a comment */
  .delete(passport.authenticate('jwt', { session: false }), commentsController.remove);

export default router;
