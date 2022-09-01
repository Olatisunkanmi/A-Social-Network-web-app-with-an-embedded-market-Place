const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A Product must have a name'],
		unique: true,
	},
	ratingsAverage: {
		type: Number,
		default: 4.5,
	},
	ratingQuantity: {
		type: Number,
		default: 0,
	},
	price: {
		type: Number,
		required: [true, 'A tour must have a name'],
	},
	category: {
		type: Array,
		required: [true, 'Product must have an email'],
	},
	username: {
		type: String,
		required: false,
	},
	price: {
		type: Number,
		required: true,
	},
	uploadedAt: [Date],
});

module.exports = mongoose.model('Product', ProductSchema);
