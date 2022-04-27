const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const express = require("express");
const router = express.Router();
const {
  validId,
  validObjectBody,
} = require("../middlewares/livro.middleware.js");

const livrosController = require("../controllers/livro.controller.js");

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

module.exports = router;
