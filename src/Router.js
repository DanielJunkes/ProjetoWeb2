import React from "react";
import { Route, Routes } from 'react-router-dom';


import Inicio from "./pages/HomePage.js";
import Cadastrar from "./pages/CadastrarLogin.js";

export default () =>{
    return (
            <Routes>
                <Route element = {<Inicio />} exact path='/' />
                <Route element = {<Cadastrar />} exact path='/cadastrar' />
                <Route element = {<Cadastrar />} exact path='/cadastrar' />
            </Routes>
     );  
            
}