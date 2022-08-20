const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductsController');
// const {
// 	getAllProducts,
// } = require('../Controllers/ProductsController');
// const { getAllProducts } = require('../Controllers/FakeMiddleware  ');
const FakeMiddleWare = require('../Controllers/FakeMiddleware');

// router.route('/').get(ProductController.getAllProducts);

console.log(typeof FakeMiddleWare.CHECK);
router.route('/').get(FakeMiddleWare.CHECK, FakeMiddleWare.CH);

// ! COMPLETE   ROUTE FOR PRODUCTS . !!!!!!!!!!!!!
module.exports = router;
