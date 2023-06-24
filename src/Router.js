import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "../src/components/header/index"

import Inicio from "./pages/HomePage.js";
import Cadastrar from "./pages/CadastrarLogin.js";
import Testes from "./pages/CadastrarTeste.js";
import CadastroPerguntas from "./pages/CadastrarPerguntas.js";


export default () =>{
    return (
        <>
            <Header/>
            <Routes>
                <Route element = {<Inicio />} exact path='/' />
                <Route element = {<Cadastrar />} exact path='/cadastrar' />
                <Route element = {<Testes />} exact path='/testes' />
                <Route element = {<CadastroPerguntas />} exact path='/addpergunta' />
                <Route element = {<CadastroPerguntas />} exact path='/addpergunta' />
            </Routes>
        </>
     );  
            
}