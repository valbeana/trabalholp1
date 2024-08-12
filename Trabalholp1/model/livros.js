const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LivrosSchema = new Schema({
    livro: { type: String, required: true, unique: true },
    autor: { type: Name, required: true },
    editora: { type: String, required: true, unique: true }, 
    categoria: { type: String, required: true, unique: true},
    pagina: { type: Number, required: true},
    criacao: { type: Date,default: Date.now}
    
});

module.exports = mongoose.model('Livros', LivrosSchema);