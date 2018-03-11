import Post from '../models/posts.model';
import httpStatus from 'http-status';

/**
 * Get all posts
 * @return {json} Data of posts
 */
function index(req, res, next) {
  Post.list()
    .then(posts => res.json(posts))
    .catch(e => next(e))
}

/**
 * Create new post
 * @property {string} req.body.title - title of post
 * @property {string} req.body.content - content of post
 * @property {string} req.body.user_id - author's id of post
 * @return {Post}
 */
function create(req, res, next) {
  const { title, content, user_id } = req.body

  const post = new Post({
      title, content,
      user: user_id
  })
  post.save()
    .then(post => res.status(httpStatus.CREATED).json(post))
    .catch((e) => {
      e.status = httpStatus.UNPROCESSABLE_ENTITY
      next(e)
    })
}

/**
 * Get post by id
 */
function getPost(req, res, next) {
  const { id } = req.params

  Post.findById(id)
    .populate('user', 'username')
    .exec()
    .then((post) => {
      if (!post) {
        const err = {
          status: httpStatus.NOT_FOUND,
          message: 'Post not found'
        }
        next(err)
      }
      res.locals.post = post
      next()
    })
    .catch((e) => {
      e.status = httpStatus.UNPROCESSABLE_ENTITY
      next(e)
    })
}

/**
 * Read a post
 */
function read(req, res, next) {
  const { post } = res.locals

  res.json(post)
}

/**
 * Update a post by id
 *
 */
function update(req, res, next) {
  const { post } = res.locals
  const { title, content, user_id } = req.body

  post.set({ title, content, user: user_id })
  post.save()
    .then(post => res.json(post))
    .catch((e) => {
      e.status = httpStatus.UNPROCESSABLE_ENTITY
      next(e)
    })
}

/**
 * Remove a post by id
 *
 */
function remove(req, res, next) {
  const { post } = res.locals

  post.remove()
    .then(post => res.json(post))
    .catch((e) => {
      e.status = httpStatus.UNPROCESSABLE_ENTITY
      next(e)
    })
}

export default { index, create, getPost, read, update, remove };
