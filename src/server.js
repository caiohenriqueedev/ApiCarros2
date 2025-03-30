<<<<<<< HEAD
require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost: ${process.env.PORT}`); //INTERPOLAÇÃO
    //console.log("Servidor rodando em http://localhost: " + process.env.PORT);//CONCATENAÇÃO
=======
require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost: ${process.env.PORT}`); //INTERPOLAÇÃO
    //console.log("Servidor rodando em http://localhost: " + process.env.PORT);//CONCATENAÇÃO
>>>>>>> afae5c8 (atualizando os commits do projeto)
})