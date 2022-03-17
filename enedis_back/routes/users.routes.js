const router = require('express').Router();
const users = require('../models/users.model');

router.get('/',async (req,res)=>{
    const result=await users.findAll();
    return res.status(200).json(result);
});

router.get('/:id',async (req,res)=>{
    const result=await users.findOneById(req.params.id);
    return res.status(200).json(result);
});

router.post('/',async (req,res)=>{
    const errors=users.validate(req.body);
    if (errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const {login}=req.body;
    const userExist=await users.findOneByLogin(login)
    if(userExist){
        return res.status(409).json({Error:'this user already exists'});
    }
    const newId=await users.add(req.body);
    if(newId){
        res.sendStatus(201);
    }
});

router.put('/:id',async (req,res)=>{
    const errors=users.validate(req.body,false);
    if (errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const result=await users.update(req.body,req.params.id);
    if(result){
        return res.sendStatus(204);
    }
    else
        return res.sendStatus(404);
});

router.delete('/:id',async (req,res)=>{
    const result=await users.destroy(req.params.id);
    if(result){
        return res.sendStatus(204);
    }
    else
        return res.sendStatus(404);
});
module.exports =router;