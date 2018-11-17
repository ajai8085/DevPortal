const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: 'orders get all' });
});

router.post('/', (req, res) => {
    const order = { productId: req.body.productId, quantity: req.body.quantity };
    res.status(201).json({ message: 'orders created', order });
});


router.patch('/:orderId', (req, res) => {
    const id = req.params.orderId;
    res.status(200).json({ message: 'orders patched', id: id });
});

router.delete('/:orderId', (req, res) => {
    const id = req.params.orderId;
    res.status(200).json({ message: 'order deleted', id: id });
});

router.get('/:orderId', (req, res) => {

    const id = req.params.orderId;
    res.status(200).json({ message: 'orders single', id: id });
});


module.exports = router;