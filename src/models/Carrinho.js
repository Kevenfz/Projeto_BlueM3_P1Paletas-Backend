const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
  livroId: { type: String, required: true },
  quantidade: { type: Number, required: true },
});

const Carrinho = mongoose.model("carrinho", CarrinhoSchema);

module.exports = Carrinho;
