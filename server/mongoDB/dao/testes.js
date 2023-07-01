var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var testeSchema = new mongoose.Schema({
    titulo: String,
    perguntas: Array
},{
    versionKey: false
})

module.exports = mongoose.model('testes', testeSchema)