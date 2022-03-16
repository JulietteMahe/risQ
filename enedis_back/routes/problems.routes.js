const router = require('express').Router();
const problem=require('../models/problems.model');

router.get('/',async(req,res)=>{
    const result=await problem.findAll();
    return res.status(200).json(result);
})

router.get('/:id',async(req,res)=>{
    const result=await problem.findOne(req.params.id);
    if(result)
        return res.status(200).json(result);
    else
        return res.sendStatus(404);
})

router.post('/',async(req,res)=>{
    
})

router.put('/:id',async(req,res)=>{
    
})

router.delete('/:id',async(req,res)=>{
    const result=await problem.destroy(req.params.id);
    if(result){
        return res.sendStatus(200);
    }
    else
        return res.sendStatus(404);
})
module.exports=router;