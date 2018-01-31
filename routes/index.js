import express from 'express';
import userRoutes from './users.route';
import postRoutes from './posts.route';
import commentRoutes from './comments.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount post routes at /posts
router.use('/posts', postRoutes);

/** GET /api/comments	 - Get list of comments */
router.get('/comments/', commentsController.index)

/** POST /api/comments - Create new comment */
router.post('/comments/', commentsController.create)

/** PUT /api/comments:id - Update a comment */
router.put('/comments/:id', commentsController.update)

/** PUT /api/comments:id - Delete a comment */
router.delete('/comments/:id', commentsController.del);


// export default router;
module.exports = router;
