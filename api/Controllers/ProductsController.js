const { ifError } = require('assert');
const Product = require('../Models/ProductModel');

exports.Clothing = async (req, res, next) => {
	req.query.category = 'Clothing';

	next();
};

// Get top 5 products
exports.getHighPrices = async (req, res, next) => {
	req.query.sort = '-price';
	next();
};
exports.getLowPrices = async (req, res, next) => {
	req.query.sort = 'price';
	next();
};

exports.getRating = async (req, res, next) => {
	req.query.sort = '-ratingsAverage';
	next();
};
// Get all products
exports.getAllProducts = async (req, res) => {
	try {
		// build query methods
		// 1a) Filter query
		const queryObj = { ...req.query };
		let excludedFields = ['limit', 'sort', 'page', 'fields'];
		excludedFields.forEach((cur) => delete queryObj[cur]);

		// ! query to find in the DB
		let query = Product.find(queryObj);

		// 1b)  adv filter

		// 2. using sort
		if (req.query.sort) {
			console.log('jj');
			console.log(typeof req.query.sort);
			let sortBy = req.query.sort.split(',').join(' ');
			console.log(sortBy);
			query = query.sort(req.query.sort);
		} else {
			query = query.sort('-createdAt');
		}
		const products = await query;

		// const products = await Product.find();
		res.status(200).json({
			status: 'Success',
			result: products.length,
			data: {
				products: products,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error.message,
		});
	}
};

exports.createProducts = async (req, res) => {
	try {
		const NewProduct = await Product.create(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Product Created',
			data: {
				Product: NewProduct,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error.message,
		});
	}
};
