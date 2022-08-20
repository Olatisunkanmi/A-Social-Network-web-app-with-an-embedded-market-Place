const POSTROUTER = require('./routes/PostsRoute');
const USERROUTER = require('./routes/UserRoutes');
const PRODUCTSROUTER = require('./routes/ProductsRoutes');

const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/api/v1/posts/', POSTROUTER);
app.use('/api/v1/users/', USERROUTER);
app.use('/api/v1/products/', PRODUCTSROUTER);

// 	------------------- PORT CONNECTION
const port = process.env.Port || 2000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
