const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const express = require("express");
const router = express.Router();
const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require("../middlewares/livro.middleware.js");

const livrosController = require("../controllers/livro.controller.js");
const carrinhoController = require("../controllers/carrinhoController.js");

const { Route } = require("express");
const { route } = require("express/lib/application");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.get("/all-livros", livrosController.findLivrosController);
router.get("/one-livro/:id", validId, livrosController.findLivroByIdController);
router.put(
  "/update-livro/:id",
  validId,
  validObjectBody,
  livrosController.updateLivroController
);
router.post(
  "/create-livro",
  validObjectBody,
  livrosController.createLivroController
);
router.delete(
  "/delete-livro/:id",
  validId,
  livrosController.deleteLivroController
);

router.get("/all-carrinho", carrinhoController.findAllCarrinhoController);

router.post(
  "/create-carrinho",
  validObjectBodyCarrinho,
  carrinhoController.createManyItemsCarrinhoController
);

router.delete(
  "/finish-carrinho",
  carrinhoController.deleteAllItemsCarrinhoController
);

module.exports = router;
