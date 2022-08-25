const Posts = require('../Models/PostModel');
const User = require('../Models/UsersModel');

// ----------------------------------------------Get all posts    Details
exports.getAllPosts = async (req, res) => {
	try {
		const Posts = await Posts.find();
		res.status(200).json({
			status: 'Sucess',
			data: {
				posts: Posts,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error,
		});
	}
};

// ------------------Create POst
exports.createPosts = async (req, res) => {
	console.log(req.params.id);
	try {
		let user = await User.find(req.params.id);

		res.status(201).json({
			status: 'success Again',
			data: {
				tour: 'newPost',
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error,
		});
	}
};

// ----------------------------------------------Get post by Id

exports.getsingleposts = (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);

	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid POst Id ',
		});
	}

	res.status(200).json({
		status: 'sucess',
		// results: UserArr.length,
		data: {
			User: UserArr,
		},
	});
};

// ------------------------------------------Update Post
exports.updateposts = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Post absent',
	});
};

// ----------------------------------------------Deete post

exports.deletepost = (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);
	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid Post Id ',
		});
	}
	res.status(200).json({
		status: 'suceess',
		data: null,
	});
};
