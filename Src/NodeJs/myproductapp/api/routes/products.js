const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose= require('mongoose');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'products get all'
    });
});

router.post('/', (req, res) => {
    //const product = { name: req.body.name, price: req.body.price };

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product.save();

    res.status(201).json({
        message: 'products created',
        product
    });
});


router.patch('/:productId', (req, res) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'products deleted',
        id: id
    });
});

router.delete('/:productId', (req, res) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'product deleted',
        id: id
    });
});

router.get('/:productId', (req, res) => {

    const id = req.params.productId;
    res.status(200).json({
        message: 'products single',
        id: id
    });
});


module.exports = router;
