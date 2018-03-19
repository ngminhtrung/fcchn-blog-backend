import express from 'express';
import postController from '../controllers/posts.controller';
import passport from 'passport';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/posts - Get list posts */
  .get(postController.index)
  /** POST /api/posts - Create new post */
  .post(postController.create);

router.route('/:id')
  /** - Get post by id before doing action */
  .all(passport.authenticate('jwt', { session: false }), postController.getPost)
  /** - Read a post with post's id */
  .get(postController.read)
  /** - Update new post with post's id */
  .put(passport.authenticate('jwt', { session: false }), postController.update)
  /** - Delete new post with post's id */
  .delete(passport.authenticate('jwt', { session: false }), postController.remove);

export default router;
