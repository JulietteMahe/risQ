const router = require('express').Router();
const problem=require('../models/problems.model');
const multer = require('multer');

const upload = multer({ dest: 'uploads' });

const deg2rad=(deg)=>{
    const pi=Math.PI;
    return deg*(pi/180);
}

const rad2deg=(rad)=>{
    const pi=Math.PI;
    return rad*(180/pi);
}
router.get('/',async(req,res)=>{
    const result=await problem.findAll();
    const returnArray=[];
    if(result){
        result.forEach((point)=>{
            const longitude=rad2deg(point.longitude);
            const latitude=rad2deg(point.latitude);
            const id_problem=point.id_problem;
            const type_problem=point.type_problem;
            const photo=point.photo;
            const state=point.state;
            const date_creation=point.date_creation;
            const date_update=point.date_update;
            const message=point.message;
            const firstname=point.firstname;
            const lastname=point.lastname;
            const stateName=point.stateName;
            const problemName=point.problemName;
            returnArray.push({longitude,latitude,id_problem,type_problem,photo,state,date_creation,date_update,message,firstname,lastname,problemName,stateName});
        })
        return res.status(200).json(returnArray);
    }
    else
        return res.sendStatus(500);
})

router.get('/locate/',async(req,res)=>{
    //get longitude and latitude from req.
    const {longitude,latitude,distance}=req.body;
    let rDistance=30;
    if(distance!==undefined){
        rDistance=distance;
    }
    const errors=problem.validateCoord( {longitude,latitude});
    if (errors){
        return res.sendStatus(422);
    }
    else{
        //Calculate position and array around r km
        const r=rDistance*1000; //search around r m
        const R=6378137; //Earth Diameter m
        const radius=r/R;
        //Convert Lat and long into rad
        const latRad=deg2rad(latitude);
        const longRad=deg2rad(longitude);
        //Calculate Lat min and max, in radian
        const minLatRad=latRad-radius;
        const maxLatRad=latRad+radius;
        //Calculate longitude min and max
        const latT=Math.asin(Math.sin(latRad)/Math.cos(radius));
        const deltaLon=Math.asin(Math.sin(radius)/Math.cos(latRad));
        const minLongRad=longRad-deltaLon;
        const maxLongRad=longRad+deltaLon; 
        const result=await problem.findPoint({minLatRad,maxLatRad,minLongRad,maxLongRad,longRad,radius});
        const returnArray=[];
        if(result){
            result.forEach((point)=>{
                const longitude=rad2deg(point.longitude);
                const latitude=rad2deg(point.latitude);
                
                returnArray.push({...point,longitude,latitude});
            })
            return res.status(200).json(returnArray);
        } 
        else
            return res.sendStatus(500);
    }
})

router.get('/:id',async(req,res)=>{
    const result=await problem.findOne(req.params.id);
    if(result){
        const longitude=rad2deg(result.longitude);
        const latitude=rad2deg(result.latitude);
        return res.status(200).json({...result,longitude,latitude});
    }
    else
        return res.sendStatus(404);
})

router.post('/',upload.single('photo'),async(req,res)=>{
    const path = req.file.path;
    const errors=problem.validate(req.body);
    if(errors){
        return res.status(422).json({ validationErrors: errors.details });
    }
    const {longitude,latitude,state,message,type_problem,creator,date_creation,date_update}=req.body;
    //Converstion from deg to rad 
    const latRad=deg2rad(latitude);
    const longRad=deg2rad(longitude);
    const payload={state,message,type_problem,creator,date_creation,date_update,longitude:longRad,latitude:latRad};
    const result=await problem.create({...payload,path});
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