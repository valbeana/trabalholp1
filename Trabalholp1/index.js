const express = require('express');
const api = express();
const URL_BD = 'mongodb+srv://valbeana:senha@cluster0.lbbwjrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const portaApi = 3000;
const mongoose = require('mongoose');

mongoose.connect(URL_BD);

mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
});

mongoose.connection.on('disconnected', () => {
    console.log('API foi desconectada do BD!');
});

mongoose.connection.on('error', (erro) => {
    console.log('Erro ao conectar no BD! ', erro);
});


api.get('/status', function (req, res) {
    res.send('<h3>API Online!</h3>');
});

api.listen(portaApi, function() {
    console.log('API Online!');
});

const celularController = require('./controller/celular.js');
api.get('/celular', livroController.listarLivro);
api.post('/celular', livroController.adicionarLivro);
api.put('/celular', livroController.editarLivro);
api.delete('/celular', livroController.removerLivro);
