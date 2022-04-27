const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  autor: { type: String, required: true },
  capa: { type: String, required: true },
  preco: { type: Number, required: true },
});

const Livro = mongoose.model("livros", LivroSchema);

module.exports = Livro;
