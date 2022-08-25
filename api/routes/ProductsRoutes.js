const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductsController');

router
	.route('/')
	.get(ProductController.getAllProducts)
	.post(ProductController.createProducts);

// ! COMPLETE   ROUTE FOR PRODUCTS . !!!!!!!!!!!!!
module.exports = router;
