const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./index');
require('dotenv').config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
	.connect(process.env.DATABASE)
	.then(console.log('Mongo Connected'));

// 	------------------- PORT CONNECTION
const port = process.env.Port || 2000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
