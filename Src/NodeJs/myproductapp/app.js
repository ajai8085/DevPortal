const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

const mongoose= require('mongoose');


mongoose.connect('mongodb://localhost:27017/RestDb',{ useNewUrlParser: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));//Only simple body for url encoded data
app.use(bodyParser.json());
app.use(cors());

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


app.use((error, req, res) => {
    res.status = error.status || 500;
    res.json({ error: { message: error.message } });
});



module.exports = app;