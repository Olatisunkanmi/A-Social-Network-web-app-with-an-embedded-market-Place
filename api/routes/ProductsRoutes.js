const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductsController');

const FakeMiddleWare = require('../Controllers/FakeMiddleware');

console.log(typeof FakeMiddleWare.CHECK);
router.route('/').get(FakeMiddleWare.CHECK, FakeMiddleWare.CH);

// ! COMPLETE   ROUTE FOR PRODUCTS . !!!!!!!!!!!!!
module.exports = router;
