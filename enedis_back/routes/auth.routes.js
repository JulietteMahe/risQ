const router = require('express').Router();
const users = require('../models/users.model');
const { calculateToken } = require('../utils/auth');
const { maxAge } = require('../utils/definitions');

router.post('/',async(req,res)=>{
    const {login, password}=req.body;
    const existUser=await users.findOneByLogin(login);
    if(existUser){
        const userOK = await users.checkPassword(password, existUser.password);
        if (!userOK) {
            return res.status(401).send('Wrong login or password')
        }
        //create token
        try {
            const token = calculateToken(existUser.id_user);
            res.cookie('jwt', token, { httpOnly: true});
            return res.status(200).json({ userId: existUser.id_user },);
        }
        catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    }
    else{
        return res.sendStatus(404);
    }
});

router.post('/logout/',async(req,res)=>{
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
});
module.exports=router;