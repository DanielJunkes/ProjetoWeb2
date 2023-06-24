import React from "react";
import "./style.css"

import imgEmail from "../../img/email.png"
import imgSenha from "../../img/senha.png"

class cadastro extends React.Component{
    render() {
        return(
            <>
                <form class="form"> 
                    <h2 class="tituloForm">Cadastro</h2>
                    <div class="containerEmail">
                        <img class="emailPng" src={imgEmail} alt="Email"/>
                        <label for="emailInputCadastro">Email</label>
                    </div>
                    <input type="email" id="emailInputCadastro" required/>
                    <div class="containerSenha">
                        <img class="senhaPng" src={imgSenha} alt="Senha"/>
                        <label for="senhaInputCadastro">Senha</label>
                    </div>
                    <input type="password" id="senhaInputCadastro" required/>
                    <button class="btnForms" type="submit" onclick="cadastroUsuario()">Cadastrar</button>
                </form>
            </>
        )
    }

}

export default cadastro