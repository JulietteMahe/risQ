const connection = require("../db-config");
const Joi = require('joi');

const db=connection.promise();

const validate = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        name: Joi.string().max(255).presence(presence),
    }).validate(data, { abortEarly: false }).error;
}

const findAll=()=>{
    return db
        .query("SELECT name, id_type FROM problem_type")
        .then(([result])=>{
            return result;
        })
}

const findOne=(id)=>{
    return db
        .query("SELECT name, id_type FROM problem_type WHERE id_type=?",[id])
        .then(([result])=>{
            return result[0];
        })
}

const add=({name})=>{
    return db
    .query("INSERT INTO problem_type (name) VALUES(?)",[name])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const update=async(data,id)=>{
    return db
    .query("UPDATE problem_type SET ? WHERE id_type=?",[data,id])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const destroy=(id)=>{
    return db
    .query("DELETE FROM problem_type WHERE id_type=?",[id])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

module.exports ={
    findOne,
    findAll,
    destroy,
    update,
    add,
    validate,
}