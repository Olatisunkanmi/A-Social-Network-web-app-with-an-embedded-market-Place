const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router
	.route('/')
	.get(UserController.getAllUsers)
	.post(UserController.createUser);

router
	.route('/:id')
	.get(UserController.getUser)
	.patch(UserController.updateUser)
	.delete(UserController.deleteUser);
module.exports = router;
