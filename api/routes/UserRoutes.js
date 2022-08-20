const express = require('express');
const router = express.Router();

// 	-------------CREATinig Second APi ---User

// 			---------Get all Users ?
router.get('/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});
// ----------------Create USer
router.post('/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});

// 	----------GET  A User
router.get('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});

// -------------Update a User
router.patch('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});

// 	----------Delete  A User
router.delete('/:id/', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});

module.exports = router;
