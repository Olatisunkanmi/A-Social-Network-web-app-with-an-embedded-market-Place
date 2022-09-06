const User = require('../Models/UsersModel');
const Post = require('../Models/UsersModel');

// 			---------Get all User ?
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			status: 'success',
			resuilt: users.length,
			Data: {
				Users: users,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error,
		});
	}
};
// ----------------Create USer
exports.createUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			status: 'Success',
			message: 'User created',
			data: {
				User: newUser,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'Fail',
			message: err,
		});
	}
};

// 	----------GET  A User
exports.getUser = async (req, res) => {
	try {
		const newUser = await User.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			result: newUser.length,
			Data: newUser,
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: error,
		});
	}
};

// -------------Update a User
exports.updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			},
		);
	} catch (error) {
		res.status(404).json({
			status: 'Error',
			message: error,
		});
	}
};

// 	----------Delete  A User
exports.deleteUser = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'User absent',
	});
};
