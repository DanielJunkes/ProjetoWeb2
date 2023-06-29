var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var resultadoSchema = new mongoose.Schema({
    nome: String,
    teste: String,
    qtd_perguntas: String,
    qtd_acertos: String,
},{
    versionKey: false
})

module.exports = mongoose.model('resultados', resultadoSchema)