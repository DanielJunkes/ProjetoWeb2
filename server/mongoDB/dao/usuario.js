var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var usuarioSchema = new mongoose.Schema({
    nome: String,
    senha: String,
},{
    versionKey: false
})

module.exports = mongoose.model('usuarios', usuarioSchema,)