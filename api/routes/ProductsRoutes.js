const express = require('express');
const router = express.Router();
const { auth } = require('../miiddleware/auth');
const ProductController = require('../Controllers/ProductsController');

router
	.route('/')
	.get(ProductController.getAllProducts)
	.post(auth, ProductController.createProducts);

router
	.route('/by-prices-high')
	.get(
		ProductController.getHighPrices,
		ProductController.getAllProducts,
	);

router
	.route('/by-prices-low')
	.get(
		ProductController.getLowPrices,
		ProductController.getAllProducts,
	);

router
	.route('/by-product-rating')
	.get(ProductController.getRating, ProductController.getAllProducts);

router
	.route('/by-newest-arrivals')
	.get(ProductController.getAllProducts);

router
	.route('/category/Clothing')
	.get(ProductController.Clothing, ProductController.getAllProducts);

// ! COMPLETE   ROUTE FOR PRODUCTS . !!!!!!!!!!!!!
module.exports = router;
