import Post from '../models/posts.model';

/**
 * Get all posts
 * @return {[Post]}
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
  const post = new Post({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user_id
  })

  post.save()
    .then(post => res.status(201).json(post))
    .catch(e => next(e))
}

function read(req, res, next) {
  
}

export default { index, create };
