//Configuração para importar o EXPRESS
const express = require("express");

//Configuração para importar o CORS
const cors = require("cors");

//Configuração para pegar todo o express e salvar numa variável
const app = express();

//Configurando o routes para trazer as rotas feitas no routes/livro.routes.js
const route = require("./src/routes/livro.route.js");

//Configurando a conexão com o banco de dados
const connectToDatabase = require('./src/database/database.js')

const port = 3333;

//Configurando nossa aplicação para trabalhar com JSON's (DEIXAR EM CIMA DE TUDO)
app.use(express.json());

connectToDatabase();

//Configurando o CORS para que nossa aplicação seja visivel pelo front (DEIXAR EM CIMA DE TUDO)
app.use(cors());

//Configurando o app.use para trazer o route configurado com o /livro sendo a base do endereço do site
app.use("/livros", route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
