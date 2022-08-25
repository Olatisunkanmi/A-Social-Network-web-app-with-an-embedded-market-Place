// ---Middleware to check if (:id ) is available

// ! CHECHKID MIDDLWARE INCOMPLETE BUT WORKS
exports.checkID = (req, res, next) => {
	console.log(req.body);

	next();
};

// 	-------------CREATinig First APi ---Posts

// ----------------------------------------------Get all posts    Details
exports.getallposts = (req, res) => {
	res.status(200).json({
		status: 'Sucess',
		// results: User.length,
		data: {
			posts: User,
		},
	});
};

// ------------------Create POst

(exports.createposts = (req, res) => {
	res.status(201).json({
		status: 'success Again',
		data: {
			tour: 'newPost',
		},
	});
}),
	// ----------------------------------------------Get post by Id

	(exports.getsingleposts = (req, res) => {
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
	});

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

module.exports = exports;
