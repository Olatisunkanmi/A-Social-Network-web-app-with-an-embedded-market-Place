const fs = require('fs');

const Users = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/user.json`),
);

// 	-------------CREATinig Second APi ---User

// !  CREATE MIDDLEWARE TO CHECK FOR :ID

// 			---------Get all Users ?
exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		resuilt: Users.length,
		Data: Users,
	});
};
// ----------------Create USer
exports.createUser = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
};

// 	----------GET  A User
exports.getUser = (req, res) => {
	let id = req.params.id * 1;
	console.log(id);
	let user = Users.find((el) => el.index === id);
	console.log(user);
	res.status(200).json({
		status: 'success',
		resuilt: user.length,
		Data: user,
	});
};

// -------------Update a User
exports.updateUser = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
};

// 	----------Delete  A User
exports.deleteUser = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
};
