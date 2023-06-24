import React from "react";


import Header from '../components/header';
import Cadastro from '../components/cadastro';
import Login from '../components/login';


function HomePage() {
    return (
        <> 
            <Header/>
            <div class="containerConteudo">
                <div class="containerForms">
                    <Cadastro/>
                    <Login/>
                </div>
            </div>
        </>
    )
}

export default HomePage