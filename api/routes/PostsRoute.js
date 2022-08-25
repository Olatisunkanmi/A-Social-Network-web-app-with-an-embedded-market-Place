const router = require('express').Router();
const PostController = require('../Controllers/PostController');

console.log(PostController.createPosts);
router
	.route('/')
	.get(PostController.getAllPosts)
	.post(PostController.createPosts);

router
	.route('/:id')
	.get(PostController.getsingleposts)
	.delete(PostController.deletepost)
	.patch(PostController.updateposts);
module.exports = router;
