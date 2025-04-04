<<<<<<< HEAD
const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodos: async(req, res) => {
    let json = { error: '', result: {} };

    let carros = await CarroService.buscarTodos(codigo);

    for (let i in carros) {
        json.result.push({
            codigo: carros[i].codigo,
            descricao: carros[i].modelo
        });
    }

    res.json(json);
},

BuscarUm: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let carro = await CarroService.BuscarUm(codigo);

if (carro) {
    json.result = carro; //se tiver pegar o parametro
}

res.json(json);
},

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);
        
        res.json(json);
    },
=======
const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodos: async(req, res) => {
    let json = { error: '', result: {} };

    let carros = await CarroService.buscarTodos(codigo);

    for (let i in carros) {
        json.result.push({
            codigo: carros[i].codigo,
            descricao: carros[i].modelo
        });
    }

    res.json(json);
},

BuscarUm: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let carro = await CarroService.BuscarUm(codigo);

if (carro) {
    json.result = carro; //se tiver pegar o parametro
}

res.json(json);
},

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);
        
        res.json(json);
    },
>>>>>>> afae5c8 (atualizando os commits do projeto)
}