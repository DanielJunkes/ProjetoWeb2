import React from "react";

import Cadastro from '../components/cadastro';
import Login from '../components/login';


function HomePage() {
    return (
        <> 
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