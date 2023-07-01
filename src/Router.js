import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "../src/components/header/index"

import Inicio from "./pages/HomePage.js";
import Cadastrar from "./pages/CadastrarLogin.js";
import Testes from "./pages/ListarTestes.js";
import EditarTeste from "./pages/EditarTeste.js";
import CadastrarTeste from "./pages/CadastrarTeste.js";
import ResponderTeste from "./pages/ResponderTeste.js";
import Resultados from "./pages/Resultados.js"
import AdicionarPergunta from "./pages/AdicionarPergunta.js"


export default () =>{
    return (
        <>
            <Header/>
            <Routes>
                <Route element = {<Inicio />} exact path='/' />
                <Route element = {<AdicionarPergunta />} exact path='/addpergunta' />
                <Route element = {<Cadastrar />} path="/cadastrar" />
                <Route element = {<Testes />} exact path='/testes' />
                <Route element = {<EditarTeste />} path='/editarteste' />
                <Route element = {<CadastrarTeste />} exact path='/addteste' />
                <Route element = {<ResponderTeste />} path='/responder' />
                <Route element = {<Resultados />} exact path='/resultados' />
            </Routes>
        </>
     );  
            
}