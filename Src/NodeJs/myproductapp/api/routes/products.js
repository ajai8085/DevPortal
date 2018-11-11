const express = require('express');
const router = express.Router();


router.get('/', (req,res,next)=>{
    res.status(200).json({message:"products get"});
});

router.post('/', (req,res,next)=>{
    res.status(200).json({message:"products post"});
});


router.get('/:productId', (req,res,next)=>{

    const id= req.params.productId;
    res.status(200).json({message:"products single", id: id});
});


module.exports= router;
