const express=require('express');
const router = express.Router();


router.get('/', (req,res,next)=>{
    res.status(200).json({message:"orders get all"});
});

router.post('/', (req,res,next)=>{
    res.status(200).json({message:"orders posted"});
});


router.patch('/:orderId', (req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({message:"orders patched", id:id});
});

router.delete('/:orderId', (req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({message:"order deleted", id:id});
});

router.get('/:orderId', (req,res,next)=>{

    const id= req.params.orderId;
    res.status(200).json({message:"orders single", id: id});
});


module.exports=router;