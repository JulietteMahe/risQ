const connection = require("../db-config");

const db=connection.promise();

const findAll=()=>{
    return db
        .query("",[])
        .then(([result])=>{
            return result;
        })
}

const findOne=(id)=>{
    return db
        .query("",[id])
        .then(([result])=>{
            return result[0];
        })
}

const add=()=>{
    return db
    .query("",[])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const update=()=>{
    return db
    .query("",[])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}

const destroy=()=>{
    return db
    .query("",[])
    .then(([result])=>{
        return result.affectedRows!==0;
    })
}


module.exports ={
    findOne,
    findAll,
    destroy,
    update,
    add
}