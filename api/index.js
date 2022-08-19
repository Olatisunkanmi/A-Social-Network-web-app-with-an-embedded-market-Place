require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const port = process.env.Port || 5000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
