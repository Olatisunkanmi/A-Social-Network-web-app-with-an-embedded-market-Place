const express = require('express');
const POSTROUTER = require('./routes/PostsRoute');
const USERROUTER = require('./routes/UserRoutes');
const PRODUCTSROUTER = require('./routes/ProductsRoutes');
const app = express();
app.use(express.json());

app.use('/api/v1/posts', POSTROUTER);
app.use('/api/v1/users', USERROUTER);
app.use('/api/v1/products', PRODUCTSROUTER);

module.exports = app;
