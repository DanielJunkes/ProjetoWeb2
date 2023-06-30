import React from "react";

import Cadastro from '../components/cadastro';
import Login from '../components/login';


const CadastroLogin = () => {
  
    return (
        <> 
            <div className="containerConteudo">
                <div className="containerForms">
                    <Cadastro/>
                    <Login/>
                </div>
            </div>
        </>
    )
}

export default CadastroLogin