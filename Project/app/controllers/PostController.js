const PostDAO = require('../services/PostDAO');

class PostController {
    static getAll(req, res) {
    PostDAO.all().then((posts) => {
      res.status(200).json(posts);
    });
  }
  static create(req, res) {
    const postData = {
      body: req.body.body,
    };
    PostDAO.create(postData)
           .then((post) => res.status(200).json(post));
  }
  static delete(req, res) {
    PostDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = PostController;
