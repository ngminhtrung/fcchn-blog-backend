import express from 'express';
import postController from '../controllers/posts.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/posts - Get list posts */
  .get(postController.index)

  /** POST /api/posts - Create new post */
  .post(postController.create);

export default router;
