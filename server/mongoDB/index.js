const mongoose =  require("mongoose");

function conectarBanco(colletion) {
  try{
    mongoose.connect(`mongodb+srv://admin:admin@cluster0.vgsfpe0.mongodb.net/${colletion}`)
     
    mongoose.connection.on('connected', function(){
      console.log("MongoDB conectado")
    })

    return mongoose
  }  catch(err){
    console.log(err);
  }
}

module.exports = conectarBanco