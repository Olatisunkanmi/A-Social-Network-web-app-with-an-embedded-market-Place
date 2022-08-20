const fs = require('fs');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const PostArr = JSON.parse(
	fs.readFileSync(`${__dirname}/data/user.json`),
);

// 	-------------CREATinig First APi ---Posts

// ----------------------------------------------Get all posts    Details

app.get('/api/v1/posts', async (req, res) => {
	res.status(200).json({
		status: 'Sucess',
		results: PostArr.length,
		data: {
			posts: PostArr,
		},
	});
});

// ------------------Create POst

app.post('/api/v1/posts/', (req, res) => {
	//   console.log(req.body);

	const newId = PostArr[PostArr.length - 1].id + 1;
	console.log(newId);

	//  New data Forged ???~
	const newPost = Object.assign({ id: newId }, req.body);
	console.log(newPost);
	PostArr.push(newPost);

	fs.writeFile(
		`${__dirname}/dev-data/data/AllUserArr-simple.json`,
		JSON.stringify(PostArr),
		(err) => {
			res.status(201).json({
				status: 'success Again',
				data: {
					tour: newPost,
				},
			});
		},
	);
});

// ----------------------------------------------Get post by Id

app.get('/api/v1/posts/:id', async (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);

	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid POst Id ',
		});
	}

	res.status(200).json({
		status: 'sucess',
		// results: UserArr.length,
		data: {
			User: UserArr,
		},
	});
});

// ----------------------------------------------Deete post

app.delete('/api/v1/posts/:id', async (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);
	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid Post Id ',
		});
	}
	res.status(200).json({
		status: 'suceess',
		data: null,
	});
});

// 	-------------CREATinig Second APi ---User

// 			---------Get all Users ?
app.get('/api/v1/users', async (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Users absent',
	});
});

// ----------------Create USer
app.post('api/v2/users', (req, res) => {
	res.status(500).json({
		status: 'Not yet Created',
		message: 'User absent',
	});
});

// -------------Update a User
app.patch('api/v2/users/:id', (req, res) => {
	res.status(500).json({
		status: 'Not yet Created',
		message: 'User absent',
	});
});

// 	----------Delete  A User
app.delete('api/v2/users/:id', (req, res) => {
	res.status(500).json({
		status: 'Not yet Created',
		message: 'User absent',
	});
});

// 	-------------CREATinig Third  APi ---	Shop Items

// 	------------------- PORT CONNECTION
const port = process.env.Port || 2000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
