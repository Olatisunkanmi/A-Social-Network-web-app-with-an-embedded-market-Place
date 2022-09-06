const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.route('/').post(UserController.createUser);

router
	.route('/:id')
	.get(UserController.getUser)
	.patch(UserController.updateUser)
	.delete(UserController.deleteUser);
module.exports = router;
