import React from "react";
import "./style.css"

import imgEmail from "../../img/email.png"
import imgSenha from "../../img/senha.png"

class cadastro extends React.Component{
    render() {
        function cadastroUsuario(){
            const email = document.getElementById("emailInputCadastro").value;
            const senha = document.getElementById("senhaInputCadastro").value;
        
            if(email!="" && senha!="") {
                fetch('http://localhost:8080/createusuario', {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({"email": email, "senha": senha})
                })
                .then(response => {
                    if(!response.ok){
                        throw new Error('Response error');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log('Erro com a operação fetch', error);
                });
            } else {
                alert("Senha e ou email estão vazios")
            }
        }
        return(
            <>
                <form class="form"> 
                    <h2 class="tituloForm">Cadastro</h2>
                    <div class="containerEmail">
                        <img class="emailPng" src={imgEmail} alt="Email"/>
                        <label for="emailInputCadastro">Nome</label>
                    </div>
                    <input type="text" id="emailInputCadastro" required/>
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