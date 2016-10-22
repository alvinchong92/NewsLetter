const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

router.get('/', PostController.getAll);
router.post('/', PostController.create);
router.delete('/:id', PostController.delete);

module.exports = router;
