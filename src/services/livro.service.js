const Livro = require("../models/Livro.js");

const findLivrosService = async () => {
  const livros = await Livro.find();
  return livros;
};

const findLivroByIdService = async (id) => {
  const livro = await Livro.findById(id);
  return livro;
};

const createLivroService = async (livroCriado) => {
  const newLivro = await Livro.create(livroCriado)
  return newLivro;
};

const updateLivroService = async (id, livroEdited) => {
  const livroAtualizado = await Livro.findByIdAndUpdate(id, livroEdited)
  return livroAtualizado;
};''

const deleteLivroService = async (id) => {
  return await Livro.findByIdAndDelete(id);
};

module.exports = {
  findLivrosService,
  findLivroByIdService,
  createLivroService,
  updateLivroService,
  deleteLivroService,
};
