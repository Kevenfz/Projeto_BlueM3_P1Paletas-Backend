const mongoose = require("mongoose");
const livrosService = require("../services/livro.service.js");

const findLivrosController = async (req, res) => {
  const allLivros = await livrosService.findLivrosService();

  if (allLivros.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum livro cadastrado!" });
  }

  res.send(allLivros);
};

const findLivroByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenLivro = await livrosService.findLivroByIdService(idParam);

  if (!chosenLivro) {
    return res.status(404).send({ message: "Livro não encontrado!" });
  }

  res.send(chosenLivro);
};

const createLivroController = async (req, res) => {
  const livro = req.body;
  const newLivro = await livrosService.createLivroService(livro);
  res.status(201).send(newLivro);
};

const updateLivroController = async (req, res) => {
  const idParam = req.params.id;
  const livroEdited = req.body;

  const updateLivro = await livrosService.updateLivroService(
    idParam,
    livroEdited
  );

  res.send(updateLivro);
};

const deleteLivroController = async (req, res) => {
  const idParam = req.params.id;
  await livrosService.deleteLivroService(idParam);
  res.send({ message: "Livro deletado com sucesso!" });
};

module.exports = {
  findLivrosController,
  findLivroByIdController,
  createLivroController,
  updateLivroController,
  deleteLivroController,
};
