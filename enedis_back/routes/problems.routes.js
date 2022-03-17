const router = require('express').Router();
const problem=require('../models/problems.model');
const multer = require('multer');

const upload = multer({ dest: 'uploads' });

const deg2rad=(deg)=>{
    const pi=Math.PI;
    return deg*(pi/180);
}
router.get('/',async(req,res)=>{
    const result=await problem.findAll();
    return res.status(200).json(result);
})

router.get('/locate/',async(req,res)=>{
    //get longitude and latitude from req.
    const {longitude,latitude}=req.body;
    const errors=problem.validateCoord( {longitude,latitude});
    if (errors){
        return res.sendStatus(500);
    }
    else{
        //Calculate position and array around r km
        const r=30; //search around r km
        const R=6371; //Earth Diameter
        const dLat= 360*r/R//DY
        const dLong=dLat*Math.cos(deg2rad(latitude));
        const minLat=latitude-dLat;
        const maxLat=latitude+dLat;
        const minLon=longitude-dLong;
        const maxLong=longitude+dLong;
        
    }
})

router.get('/:id',async(req,res)=>{
    const result=await problem.findOne(req.params.id);
    if(result)
        return res.status(200).json(result);
    else
        return res.sendStatus(404);
})

router.post('/',upload.single('photo'),async(req,res)=>{
    const path = req.file.path;
    const errors=problem.validate(req.body);
    if(errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const result=await problem.create({...req.body,path});
    if(result){
        return res.status(201).json({...req.body,path,result});
    }
    else{
        return res.sendStatus(500);
    }
})

router.put('/:id',async(req,res)=>{
    const errors=problem.validate(req.body,false);
    if(errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const result=await problem.update(req.body,req.params.id);
    if(result)
        return res.sendStatus(204);
    else    
        return res.sendStatus(404);
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