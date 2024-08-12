const Livros = require('../model/livros.js');

exports.listarLivros = async (req, res) => {
    try{
        const livros = await livrosSchema.find({});
        res.send(livros);
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro o listar!', detalhes: erro  });
    }
}

exports.adicionarLivro = async (req, res) => {
    const novoLivros = req.headers;
    if(!novoLivros.nome || !novoLivro.preco) {
        res.send({ msg: '[ERRO]: Informar nome e preço!' });
    } else {
        try{
            await Livros.create(novoLivro);
            res.send({ msg: '[SUCESSO]: Livros adicionado!' });
        } catch(erro) {
            console.log(erro);
            res.send({ msg: '[ERRO]: Erro ao cadastrar', detalhes: erro  });
        }
    }
}

exports.editarLivro = async (req, res) => {
    const livros = req.headers;
    if(!livros.nome || !livro.preco) {
       return res.send({ msg: '[ERRO]: Informar nome e preço!' });
    }
    try {
        const livrosEditado = await livros.findOneAndUpdate({ nome: livro.nome }, { preco: livro.preco });
        if(livrosEditado == null)
            res.send({ msg: '[AVISO]: Livros não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: livros editado!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao editar', detalhes: erro });
    }
}

exports.removerLivros = async (req, res) => {
    const livros = req.headers;
    if(!livros.nome)
       return res.send({ msg: '[ERRO]: Informar nome!' });
    try {
        const livrosRemovido = await Livros.findOneAndDelete({ nome: livro.nome });
        if(livrosRemovido == null)
            res.send({ msg: '[AVISO]: Livro não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: livro removido!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao remover', detalhes: erro });
    }
}