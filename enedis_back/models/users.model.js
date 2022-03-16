const connection = require("../db-config");
const Joi = require('joi');
const argon2 = require('argon2');

const db=connection.promise();

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
};

const hashPassword = (plainPassword) => {
    return argon2.hash(plainPassword, hashingOptions);
};

const validate = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        login: Joi.string().max(255).presence(presence),
        firstname: Joi.string().max(255).presence(presence),
        lastname: Joi.string().max(255).presence(presence),
        password: Joi.string().min(8).max(50).presence(presence)
    }).validate(data, { abortEarly: false }).error;
}



const findAll=()=>{
    return db
        .query("SELECT id_user,firstname, lastname, login, password FROM users")
        .then(([result])=>{
            return result;
        })
}

const findOneByLogin=(login)=>{
    return db
        .query("SELECT id_user,firstname, lastname, login, password FROM users WHERE login=?",[login])
        .then(([result])=>{
            return result[0];
        })
}


const findOneById=(id)=>{
    return db
        .query("SELECT id_user,firstname, lastname, login, password FROM users WHERE id_user=?",[id])
        .then(([result])=>{
            return result[0];
        })
}

const add=async({login, password,firstname,lastname})=>{
    const hashedPassword = await hashPassword(password);
    return db
    .query("INSERT INTO users (login, password,firstname,lastname) VALUES(?,?,?,?)",[login,  hashedPassword,firstname,lastname])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const update=async(data,id)=>{
    const password2=data.password;
    let  password='';
    if(password2!==undefined){
        password=await hashPassword(password2);
    }
    const {login,firstname,lastname}=data;
    const payload={password,login, lastname,firstname};
    return db
    .query("UPDATE users SET ? WHERE id_user=?",[payload,id])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const destroy=(id)=>{
    return db
    .query("DELETE FROM users WHERE id_user=?",[id])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}


module.exports ={
    findOneById,
    findAll,
    destroy,
    update,
    add,
    validate,
    hashPassword,
    findOneByLogin
}