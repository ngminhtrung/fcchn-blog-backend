import express from 'express';
import postController from '../controllers/posts.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/posts - Get list posts */
  .get(postController.index)

  /** POST /api/posts - Create new post */
  .post(postController.create);

  /** - Update new post with post's id */

  /** - Delete new post with post's id */

  /** - Read a post with post's id */
export default router;
