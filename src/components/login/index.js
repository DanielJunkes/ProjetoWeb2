import React, { useContext } from "react";
import "./style.css"

import {Contexto} from "../../routerProvider"

import imgLogin from "../../img/email.png"
import imgSenha from "../../img/senha.png"

const Login = () => {

    const {rota} = useContext(Contexto)
    const {setUsuario} = useContext(Contexto)

    const handleSetUsuario = (valor) =>{
        setUsuario(valor)
    }

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
                if(senha === data.senha) {
                    handleSetUsuario(nome)
                    sessionStorage.setItem('nome', nome)
                    sessionStorage.setItem('idUser', data._id)
                    window.location=('http://localhost:3000'+rota)
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