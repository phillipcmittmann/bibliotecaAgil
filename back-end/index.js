const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const LivrosModel = require('./database/models/LivrosModel');

app.listen(4000, () => {
    console.log('Api rodando.');

    LivrosModel.bulkCreate([
        {
            titulo: 'Como fazer sentido e bater o martelo',
            autor: 'Alexandro Aolchique',
            ano: '2017',
            emprestado_para: null
        },
        {
            titulo: 'Código Limpo',
            autor: 'Tio Bob',
            ano: '2001',
            emprestado_para: null
        },
        {
            titulo: 'Basquete 101',
            autor: 'Hortência Marcari',
            ano: '2010',
            emprestado_para: null
        },
    ])
});