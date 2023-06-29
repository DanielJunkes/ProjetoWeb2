var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var testeSchema = new mongoose.Schema({
    id_criador: String,
    titulo: String,
    pergunta: Object
},{
    versionKey: false
})

module.exports = mongoose.model('testes', testeSchema)