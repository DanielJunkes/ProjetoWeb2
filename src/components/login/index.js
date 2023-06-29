import React from "react";
import "./style.css"

import {Link} from 'react-router-dom';

import imgLogin from "../../img/email.png"
import imgSenha from "../../img/senha.png"

const Login = () => {


    const  verificarUsuario = async () =>{
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

        return(
            <>
                <form className="form">
                <h2 className="tituloForm">Login</h2>
                <div className="containerEmail">
                    <img className="emailPng" src={imgLogin} alt="Email"/>
                    <label for="emailInputLogin">Nome</label>
                </div>
                <input type="txt" id="emailInputLogin" required/>
                <div className="containerSenha"> 
                    <img className="senhaPng" src={imgSenha} alt="Senha"/>
                    <label for="senhaInputLogin">Senha</label>
                </div>
                <input type="password" id="senhaInputLogin" required/>
                <button className="btnForms" type="button" onClick={verificarUsuario}>Login</button>
                </form>
            </>
        )
    }


export default Login