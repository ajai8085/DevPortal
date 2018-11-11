const express = require('express');
const router = express.Router();


router.get('/', (req,res,next)=>{
    res.status(200).json({message:"products get all"});
});

router.post('/', (req,res,next)=>{
    res.status(200).json({message:"products posted"});
});


router.patch('/:productId', (req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({message:"products deleted", id:id});
});

router.delete('/:productId', (req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({message:"product deleted", id:id});
});

router.get('/:productId', (req,res,next)=>{

    const id= req.params.productId;
    res.status(200).json({message:"products single", id: id});
});


module.exports= router;
