import React from "react";
import "./style.css"

import {Link} from 'react-router-dom';

import imgLogin from "../../img/email.png"
import imgSenha from "../../img/senha.png"

class login extends React.Component{
    constructor (props){
        this.state = {
            "opcao": String
        }
    }

    verificarUsuario = async () =>{
    try{
        const nome = document.getElementById("emailInputLogin").value;
        const senha = document.getElementById("senhaInputLogin").value;
    
        if(nome!=="" && senha!=="") {
            await fetch('http://localhost:8080/user/login/'+nome, {
                method: "GET",
                headers: {'Content-type': 'application/json'},
            })
            .then(response => {
                if(!response.ok){
                   alert("Nome Invalido")
                }else{
                    return response.json() 
                    } 
                }
            )
            .then(data => {
                console.log(data)
                if(senha === data.senha){
                    <Link to="testes"/>
                    }else{
                     alert("Senha Incorreta")
                    }
            })
            .catch(error => {
                console.log('Erro com a operação fetch', error);
            });
        }  else {
            alert("Senha e ou email estão vazios")
            }
    }catch(e){
        console.log(e)
    }
        
    }


    render() {
        return(
            <>
                <form class="form">
                <h2 class="tituloForm">Login</h2>
                <div class="containerEmail">
                    <img class="emailPng" src={imgLogin} alt="Email"/>
                    <label for="emailInputLogin">Nome</label>
                </div>
                <input type="txt" id="emailInputLogin" required/>
                <div class="containerSenha"> 
                    <img class="senhaPng" src={imgSenha} alt="Senha"/>
                    <label for="senhaInputLogin">Senha</label>
                </div>
                <button class="btnForms" type="button" onClick={this.verificarUsuario}>Login</button>
                </form>
            </>
        )
    }

}

export default login