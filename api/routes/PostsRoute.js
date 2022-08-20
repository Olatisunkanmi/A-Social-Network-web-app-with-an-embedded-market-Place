const express = require('express');
const router = require('express').Router();

const PostController = require('../Controllers/PostController');

router
	.route('/')
	.get(PostController.getallposts)
	.get(PostController.createposts);

router
	.route('/:id')
	.get(PostController.getsingleposts)
	.delete(PostController.deletepost)
	.patch(PostController.updateposts);
module.exports = router;
