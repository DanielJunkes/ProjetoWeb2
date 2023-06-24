// require("dotenv").config();
const mongo =  require("mongoose");

function conectarBanco(collection) {
    mongo.connect("mongodb+srv://admin:admin@cluster0.vgsfpe0.mongodb.net/")

    mongo.connection.on('connected', function(){
        console.log("MongoDB conectado")
    })

}

export default conectarBanco