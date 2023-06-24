import React from "react";
import "./style.css"

import imgLogin from "../../img/email.png"
import imgSenha from "../../img/senha.png"

class login extends React.Component{
    render() {
        return(
            <>
                <form class="form">
                <h2 class="tituloForm">Login</h2>
                <div class="containerEmail">
                    <img class="emailPng" src={imgLogin} alt="Email"/>
                    <label for="emailInputLogin">Email</label>
                </div>
                <input type="email" id="emailInputLogin" required/>
                <div class="containerSenha"> 
                    <img class="senhaPng" src={imgSenha} alt="Senha"/>
                    <label for="senhaInputLogin">Senha</label>
                </div>
                <input type="password" id="senhaInputLogin" required/>
                <button class="btnForms" type="button" onclick="loginUsuario()">Login</button>
                </form>
            </>
        )
    }

}

export default login