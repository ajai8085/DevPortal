const express = require('express');
const app = express();

const productsRoute = require('./api/routes/products')

// app.use((req, res, next) => {
//     res.status(200).json({ message: 'it works' });
// });

app.use('/products', productsRoute);


module.exports = app;