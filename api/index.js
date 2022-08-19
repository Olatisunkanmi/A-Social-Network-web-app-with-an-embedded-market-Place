require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const posts = [
	{
		username: 'kyle',
		title: 'Post 2',
	},
	{
		username: 'kyle',
		title: 'Post 1',
	},
];

app.get('/posts', authenticateToken, (req, res) => {
	try {
		res.status(200).json(posts);
	} catch (error) {}
});

app.post('/login', (req, res) => {
	try {
		console.log(req.body);
		const username = req.body.username;

		const user = { name: username };
		// takes payload which we want to serialize which is 'user'
		// process.env ... is the secret key used to seiaze user
		const accessToken = jwt.sign(
			user,
			process.env.ACCESS_TOKEN_SECRET,
		);
		res.json({ accessToken: accessToken });
	} catch (error) {
		res.status(404).json(error);
		console.log(error.message);
	}
});

function authenticateToken(req, res, next) {
	const authHeader = req.header;
	//
	// const authHeader = req.header['authorization'];
	// console.log(`Header ----- ${authHeader}`);

	next();
}

const port = process.env.Port || 5000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
