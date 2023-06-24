// import { connect } from "mongoose";
// const { connect } =  require("mongoose");
import React from "react"


import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:admin@cluster0.vgsfpe0.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



export function conectarBanco() {
    // await connect(CONECTION, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });
    console.log(process.env.CONECTION);
}


// module.exports = conectarBanco
// export default conectarBanco