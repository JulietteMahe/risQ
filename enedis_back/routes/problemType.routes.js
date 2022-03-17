const router = require('express').Router();
const problemType=require('../models/problemType.model');

router.get('/',async(req,res)=>{
    const result=await problemType.findAll();
    console.log(result);
    return res.status(200).json(result);
})

router.get('/:id',async(req,res)=>{
    const result=await problemType.findOne(req.params.id);
    return res.status(200).json(result);
})

router.post('/',async(req,res)=>{
    const errors=problemType.validate(req.body);
    if(errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const result=await problemType.add(req.body);
    if(result){
        return res.sendStatus(201);
    }
    else{
        return res.sendStatus(500);
    }
})

router.put('/:id',async(req,res)=>{
    const errors=await problemType.validate(req.body,false);
    if(errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const result=problemType.update(req.body,req.params.id);
    if(result){
        return res.sendStatus(204);
    }
    else{
        return res.sendStatus(500);
    }
})

router.delete('/:id',async(req,res)=>{
    const result=await problemType.destroy(req.params.id);
    if(result){
        return res.sendStatus(204);
    }
    else{
        return res.sendStatus(500);
    }
})

module.exports=router;