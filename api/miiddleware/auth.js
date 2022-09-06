const User = require('../Models/UsersModel');

exports.auth = async (req, res, next) => {
	let userId = [];
	userId = await User.findOne({
		name: `${req.query.username}`,
		function(docs, err) {
			if (docs) {
				userId.push(userId);
			} else {
				return err;
			}
		},
	});

	if (!userId) {
		return res.status(404).json({
			status: 'Fail',
			message: 'error.message',
		});
	}

	req.middleware = userId;
	next();
};
