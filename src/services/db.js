<<<<<<< HEAD
const mysql = require('mysql');

const connection = mysql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME

});

connection.connect((error)=>{

    if(error) throw error;
    console.log(`conectado ao BD: ${process.env.DB_NAME}`)
});

=======
const mysql = require('mysql');

const connection = mysql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME

});

connection.connect((error)=>{

    if(error) throw error;
    console.log(`conectado ao BD: ${process.env.DB_NAME}`)
});

>>>>>>> afae5c8 (atualizando os commits do projeto)
module.exports = connection;