const res = require('express/lib/response');
const carrinhoService = require('../services/carrinho.service')

const findAllCarrinhoController = async (req, res) => {
    const allCarrinho = await carrinhoService.findAllCarrinhoService();
    if(!allCarrinho){
        return res.status(404).send({message: "Não existe nenhum item na sacola!"});
    }
    res.send(allCarrinho)
};

const createManyItemsCarrinhoController = async (req, res) => {
    const carrinho = req.body;
    const newCarrinho = await carrinhoService.createManyItemsCarrinhoService(carrinho);
    res.status(201).send(newCarrinho);
};

const deleteAllItemsCarrinhoController = async (req, res) => {
    await carrinhoService.deleteAllItemsCarrinhoService();
    res.send({message: "Sacola finalizada com sucesso!"})
};

module.exports = {
    findAllCarrinhoController,
    createManyItemsCarrinhoController,
    deleteAllItemsCarrinhoController,
}
