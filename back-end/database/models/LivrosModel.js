const { Sequelize } = require('sequelize');
const connection = require('../database');

const LivrosModel = connection.define('livros', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    disponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    emprestado_para: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

LivrosModel.sync({ force: false });

module.exports = LivrosModel;