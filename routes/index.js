import express from 'express';
import userRoutes from './users.route';
import postRoutes from './posts.route';
import commentRoutes from './comments.route';
import loginRoutes from './login.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount login routes at /login
router.use('/login', loginRoutes);

// mount post routes at /posts
router.use('/posts', postRoutes);

// mount post comments at /comments
router.use('/comments', commentRoutes);

// export default router;
module.exports = router;