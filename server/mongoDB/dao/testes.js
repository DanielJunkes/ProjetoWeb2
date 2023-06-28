var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var testeSchema = new mongoose.Schema({
    teste: String,
    pergunta: {

    }
})

module.exports = mongoose.model('testes', testeSchema)