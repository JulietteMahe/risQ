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
        state:Joi.number().integer().presence('required'),
        date_creation:Joi.date().presence(presence),
        date_update:Joi.date().presence('required'),
        message:Joi.string().presence(presence)
    }).validate(data, { abortEarly: false }).error;
}

const validateCoord = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        latitude:Joi.number().presence(presence),
        longitude:Joi.number().presence(presence)
    }).validate(data, { abortEarly: false }).error;
}

const findAll=()=>{
    return db
        .query("SELECT * FROM view_problem")
        .then(([result])=>{
            return result;
        })
        .catch((err)=>{
            console.log(err);
        })
}

const findOne=(id)=>{
    return db
        .query("SELECT * FROM view_problem WHERE id_problem=?",[id])
        .then(([result])=>{
            return result[0];
        })
        .catch((err)=>{
            console.log(err);
        })
}

const create=(data)=>{
    const {longitude,latitude,state,message,type_problem,creator,date_creation,date_update,path}=data;
    return db
        .query("INSERT INTO problems (latitude,longitude,type_problem,photo,creator,state,date_creation,date_update,message) VALUES (?,?,?,?,?,?,?,?,?)",[latitude,longitude,type_problem,path,creator,state,date_creation,date_update,message])
        .then(([result])=>{
            return result.insertId;
        })
        .catch((err)=>{
            console.log(err);
        })
}

const update=(data,id)=>{
    return db
        .query("UPDATE problems SET ? WHERE id_problem=?",[data,id])
        .then(([result])=>{
            return result.affectedRows!==0;
        })
        .catch((err)=>{
            console.log(err);
        })
}

const destroy=(id)=>{
    return db
        .query("DELETE FROM problems WHERE id_problem=?",[id])
        .then(([result])=>{
            return result.affectedRows!==0;
        })
        .catch((err)=>{
            console.log(err);
        })
}

const findPoint=({minLatRad,maxLatRad,minLongRad,maxLongRad,longRad,radius})=>{
    return db
    .query("SELECT * FROM view_problem WHERE  (latitude >= ? AND latitude <= ?) AND (longitude >= ? AND longitude <= ?) AND acos(sin(?) * sin(latitude) + cos(?) * cos(latitude) * cos(longitude - (?))) <= ?;",
        [minLatRad,maxLatRad,minLongRad,maxLongRad,minLatRad,minLatRad,longRad,radius])
    .then(([result])=>{
        return result;
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports={
    findAll,
    findOne,
    create,
    update,
    destroy,
    validate,
    validateCoord,
    findPoint
}

/*
SELECT * FROM Places WHERE
    (Lat => latminRad AND Lat <= latMaxRad) AND (Lon >= lonMinRad AND Lon <= LonMaxRad)
AND
    acos(sin(latminRad) * sin(Lat) + cos(latMinRad) * cos(Lat) * cos(Lon - (-longRad))) <= radius;*/