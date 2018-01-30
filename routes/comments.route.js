import express from 'express';
import commentCtrl from '../controllers/comments.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/comments	 - Get list of comments */
  .get(commentsController.index)

  /** POST /api/comments - Create new comment */
  .post(commentsController.create)

  /** PUT /api/comments:id - Update a comment */
  .put(commentsController.update)

  /** PUT /api/comments:id - Delete a comment */
  .delete(commentsController.delete);

export default router;
