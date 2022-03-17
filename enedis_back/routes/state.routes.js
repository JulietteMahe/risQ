const router = require('express').Router();
const states = require('../models/state.model');

router.get('/',async(req,res)=>{
    const result=await states.findAll();
    if (result){
        return res.status(200).json(result);
    }
    else
        return res.sendStatus(500);
})

module.exports=router;