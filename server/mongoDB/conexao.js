// import mongoose from "mongoose";
const mongoose =  require("mongoose");
// import React from "react"




 function conectarBanco() {
  // try {
  //   await mongoose.connect('mongodb+srv://admin:admin@cluster0.vgsfpe0.mongodb.net/', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  
  //   mongoose.connection.on('connected', function(){
  //     console.log("MongoDB conectado")
  //     })
      
  // } catch(err){
  //   console.log(err);
  // }

  try{
    mongoose.set("strictQuery", false);

    mongoose
      .connect("mongodb://127.0.0.1:27017/shop", {
        useNewUrlParser: true,
      })
      .catch((e) => {
        console.error("Connection error", e.message);
      });

    const db = mongoose.connection;
    return db

  }  catch(err){
      console.log(err);
    }

  // const mongoose = require("mongoose");

    
    
  
}

// module.exports = db;
module.exports = conectarBanco
// export default conectarBanco