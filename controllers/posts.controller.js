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

/**
 * Get a post by id
 */
function getPost(req, res, next) {
  Post.get(req.params.id)
    .then((post) => {
      req.json(post);
    })
    .catch(e => next(e));
}

/**
 * Update a post by id
 */
function update(req, res, next) {
  const {id} = req.params;
  const update = req.body;
  Post.findByIdAndUpdate(id, update, { new: true })
    .exec()
    .then(updatePost => res.json(updatePost))
    .catch(e => next(e));
}

/**
 * Remove a post by id
 */
function remove(req, res, next) {
  const {id} = req.params;
  const remove = req.body;
  Post.deleteOne(id, remove, { new: true })
    .exec()
    .then(deletePost => res.json(deletePost))
    .catch(e => next(e));
}

export default { index, create };
