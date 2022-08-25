const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A user must have a name'],
		unique: true,
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
	// friends: [
	// 	{
	// 		type: Schema.Type.ObjectId,
	// 		ref: 'User',
	// 	},
	// ],
	// Products: [
	// 	{
	// 		type: Schema.Type.ObjectId,
	// 		ref: 'Products',
	// 	},
	// ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
