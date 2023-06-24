import React from "react";
import "./style.css"

class cadastro extends React.Component{
    render() {
        return(
            <>
                <form class="form"> 
                    <h2 class="tituloForm">Cadastro</h2>
                    <div class="containerEmail">
                        <img class="emailPng" src="../img/email.png" alt="Email"/>
                        <label for="emailInputCadastro">Email</label>
                    </div>
                    <input type="email" id="emailInputCadastro" required/>
                    <div class="containerSenha">
                        <img class="senhaPng" src="../img/senha.png" alt="Senha"/>
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