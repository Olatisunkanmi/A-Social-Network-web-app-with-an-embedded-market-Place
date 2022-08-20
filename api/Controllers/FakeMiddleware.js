const express = require('express');
const router = express.Router();

const {
	getAllProducts,
} = require('../Controllers/ProductsController');

// getAllProducts.router

exports.CHECK = (req, res, next) => {
	// const { price, tours } = req.body;
	console.log(req.body);
	// if (!price || !tours) {
	// 	return res.status(400).json({
	// 		status: 'Fail',
	// 		message: 'bad request',
	// 	});
	// }
	next();
};

exports.CH = getAllProducts;
