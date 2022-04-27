const mongoose = require("mongoose");
const remoteUrl ="mongodb+srv://root:root@api-ellivrodon.a810o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const localUrl = "mongodb://localhost:27017/livros-db";

function connectToDatabase() {
  mongoose
    .connect(`${remoteUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Conectado :D");
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err} :(`);
    });
}

module.exports = connectToDatabase;
