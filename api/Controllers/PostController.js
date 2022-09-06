const Post = require('../Models/PostModel');
const User = require('../Models/UsersModel');

// ! get all Posts

exports.getAllPosts = async (req, res) => {
	try {
		let posts = await Post.find();
		res.status(200).json({
			status: 'success',
			resullt: posts.length,
			data: {
				Posts: posts,
			},
		});
	} catch (error) {
		res.status(200).json({
			status: 'Fail',
			data: {
				feedback: error.message,
			},
		});
	}
};

// ! Create a Post
exports.createPosts = async (req, res) => {
	try {
		let newPost = await Post.create(req.body);
		res.status(200).json({
			status: 'success',
			data: {
				Posts: newPost,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			data: {
				feedback: error.message,
			},
		});
	}
};

// ! Delete a Post
exports.deletePost = async (req, res) => {
	let userId = req.query;
	try {
	} catch (error) {}
};

// ! get A post
exports.getApost = async (req, res) => {
	try {
		let post = Post.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				Post: post,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			data: {
				feedback: error.message,
			},
		});
	}
};
