import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "../src/components/header/index"

import Inicio from "./pages/HomePage.js";
import Cadastrar from "./pages/CadastrarLogin.js";
import Testes from "./pages/ListarTestes.js";
import CadastroPerguntas from "./pages/CadastrarPerguntas.js";
import CadastrarTeste from "./pages/CadastrarTeste.js";
import ResponderTeste from "./pages/ResponderTeste.js";
import Resultados from "./pages/Resultados.js"


export default () =>{
    return (
        <>
            <Header/>
            <Routes>
                <Route element = {<Inicio />} exact path='/' />
                <Route element = {<Cadastrar />} exact path='/cadastrar' />
                <Route element = {<Testes />} exact path='/testes' />
                <Route element = {<CadastroPerguntas />} exact path='/addpergunta' />
                <Route element = {<CadastrarTeste />} exact path='/addteste' />
                <Route element = {<ResponderTeste />} exact path='/responder' />
                <Route element = {<Resultados />} exact path='/resultados' />
            </Routes>
        </>
     );  
            
}