const express = require('express');
const app = express();

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');
// app.use((req, res, next) => {
//     res.status(200).json({ message: 'it works' });
// });

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);


module.exports = app;