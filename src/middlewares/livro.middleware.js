const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: "ID inválido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const livro = req.body;

  if (
    !livro ||
    !livro.titulo ||
    !livro.descricao ||
    !livro.autor ||
    !livro.capa ||
    !livro.preco
  ) {
    return res.status(404).send({
      message: "Preencha todos os campos indicados!",
    });
  }
  next();
};

module.exports = {validId, validObjectBody,};
