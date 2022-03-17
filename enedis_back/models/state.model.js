const connection = require("../db-config");

const db=connection.promise();

const findAll=()=>{
    return db
    .query("SELECT id, name FROM states ORDER BY name")
    .then(([result])=>{
        return result;
    })
}
module.exports ={
    findAll
}