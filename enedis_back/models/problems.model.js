const connection = require("../db-config");
const Joi = require('joi');

const db=connection.promise();

const validate = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        latitude:Joi.number().presence(presence),
        longitude:Joi.number().presence(presence),
        type_problem:Joi.number().integer().presence(presence),
        creator:Joi.number().integer().presence(presence),
        state:Joi.number().integer().presence(presence),
        date_creation:Joi.date().presence(presence),
        date_update:Joi.date().presence(presence),
        message:Joi.string.presence(presence)
    }).validate(data, { abortEarly: false }).error;
}

const findAll=()=>{
    return db
        .query("SELECT * FROM view_problem")
        .then(([result])=>{
            return result;
        })
}

const findOne=(id)=>{
    return db
        .query("SELECT * FROM view_problem WHERE id_problem=?",[id])
        .then(([result])=>{
            return result[0];
        })
}

const create=()=>{
    return db
        .query("",[])
        .then(([result])=>{
            return result.affectedRows!==0;
        })
}

const update=(id,data)=>{
    return db
        .query("",[data,id])
        .then(([result])=>{
            return result.affectedRows!==0;
        })
}

const destroy=(id)=>{
    return db
        .query("",[id])
        .then(([result])=>{
            return result.affectedRows!==0;
        })
}
module.exports={
    findAll,
    findOne,
    create,
    update,
    destroy
}