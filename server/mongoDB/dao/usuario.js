var conectarBanco = require ('../index')
var mongoose = conectarBanco('TesteMemoria')

var usuarioSchema = new mongoose.Schema({
    nome: String,
    senha: String,
<<<<<<< HEAD
}, {
    versionKey: false // You should be aware of the outcome after set to false
=======
},{
    versionKey: false
>>>>>>> 07328cd25eb172e3e081f049acc2deec3f60839e
})

module.exports = mongoose.model('usuarios', usuarioSchema,)