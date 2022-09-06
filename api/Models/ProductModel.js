const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A Product must have a name'],
		maxlength: [
			40,
			'A product must have less than or equal than 40 xters',
		],
		minlength: [5, 'A product must have greater than 5 xters'],
	},
	ratingsAverage: {
		type: Number,
		default: 4.5,
		min: [1, 'Rating must be above 1.0'],
		max: [5, 'Rating must be below 5.0'],
	},
	desc: {
		type: String,
		trim: true,
		required: [true, 'A product must have a description '],
	},
	price: {
		type: Number,
		required: [true, 'A Product must have a name'],
	},
	priceDiscount: {
		type: Number,
		validate: {
			validator: function (value) {
				return value < this.price;
			},

			massage: 'Discount cannot be greater than price',
		},
	},
	category: {
		type: Array,
		required: [true, 'Product must have a category'],
	},
	username: {
		type: String,
		required: false,
	},
	likes: {
		type: Number,
		required: false,
	},
	price: {
		type: Number,
		required: true,
	},
	imageCover: {
		type: String,
		required: [false, 'A product must have a cover image'],
	},
	images: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Product', ProductSchema);
