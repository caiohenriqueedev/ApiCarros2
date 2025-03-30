<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroControllers');

router.get('/carros', CarroController.buscarTodos);
router.get('/carros: codigo', CarroController.buscarUm);
router.post('/carro', CarroController.buscarInserir);

=======
const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroControllers');

router.get('/carros', CarroController.buscarTodos);
router.get('/carros: codigo', CarroController.buscarUm);
router.post('/carro', CarroController.buscarInserir);

>>>>>>> afae5c8 (atualizando os commits do projeto)
module.exports = router;