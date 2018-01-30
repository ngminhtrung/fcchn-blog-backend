import express from 'express';
import userRoutes from './users.route';
import postRoutes from './posts.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
// mount post routes at /posts
router.use('/posts', postRoutes);

// export default router;
module.exports = router;
