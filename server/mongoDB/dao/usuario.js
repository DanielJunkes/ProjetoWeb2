var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var usuarioSchema = new mongoose.Schema({
    nome: String,
    senha: String,
})

module.exports = mongoose.model('usuarios', usuarioSchema)