const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A user must have a name'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, ' User must have a password'],
	},
	email: {
		type: String,
		required: [true, 'User must have an email'],
	},
	country: {
		type: String,
		required: [false, 'User must have a country '],
	},
	cart: {
		type: Number,
		default: 0,
	},
	profilePicture: {
		type: String,
		default: '',
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
