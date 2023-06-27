import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';

// import { conctarBanco} from "./mongoDB/conexao"
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mydb")


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
