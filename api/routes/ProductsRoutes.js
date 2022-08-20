const express = require('express');
const router = express.Router();

// 	-------------CREATinig Third  APi ---	Shop Items

// -------------------------------Get al Products
router.get('/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'products absent',
	});
});

// -------------------------------Create  a Product
router.post('/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'products absent',
	});
});

// -------------------------------get a Product
router.get('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'products absent',
	});
});

// -------------------------------Update a Product
router.patch('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'products absent',
	});
});
// -------------------------------Delete a Products
router.delete('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'products absent',
	});
});

module.exports = router;
