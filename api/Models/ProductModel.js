const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A Product must have a name'],
	},
	category: {
		type: Array,
		required: [true, 'Product must have an email'],
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Product', ProductSchema);
