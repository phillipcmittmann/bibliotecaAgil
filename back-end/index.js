const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const LivrosModel = require('./database/models/LivrosModel');

app.get('/livros', (req, res) => {
    LivrosModel
        .findAll({
            where: { disponivel: 1 },
            raw: true,
            order: [
                ['id', 'DESC']
            ]
        })
        .then(livros => {
            res.statusCode = 200;
            res.json(livros);
        });
});

app.post('/retirarLivro', (req, res) => {
    if (isNaN(req.body.id)) {
        res.sendStatus(400).sendStatus('Livro não encontrado.');
    } else {
        var id = parseInt(req.body.id);

        LivrosModel
            .update(
                { 
                    disponivel: 0,
                    emprestado_para: req.body.emprestadoPara
                }, 
                {
                    where: { id: id }
                }
            );

        res.sendStatus(200).send('Livro retirado com sucesso.');
    }
});

app.post('/doarLivro', (req, res) => {
    LivrosModel
    .create({
        titulo: req.body.livro.titulo,
        autor: req.body.livro.autor,
        ano: req.body.livro.ano,
        disponivel: req.body.livro.disponivel,
        emprestado_para: req.body.livro.emprestadoPara
    });

    res.status(201).send('Livro cadastrado com sucesso.');
});

app.post('/devolverLivro', (req, res) => {
    if (isNaN(req.body.id)) {
        res.sendStatus(400).sendStatus('Livro não encontrado.');
    } else {
        var id = parseInt(req.body.id);

        LivrosModel
            .update(
                { 
                    disponivel: 1,
                    emprestado_para: null
                }, 
                {
                    where: { id: id }
                }
            );

        res.sendStatus(200).send('Livro devolvido com sucesso.');
    }
})

app.listen(4000, () => {
    console.log('Api rodando.');

    LivrosModel
        .drop()
        .then(() => {
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
            ]);
        });
});