const router = require('express').Router();
const PostController = require('../Controllers/PostController');
const { auth } = require('../miiddleware/auth');

router
	.route('/')
	.get(PostController.getAllPosts)
	.post(auth, PostController.createPosts);

router.route('/:id').delete(PostController.deletePost);
module.exports = router;
