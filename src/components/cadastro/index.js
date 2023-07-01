import React from "react";
import "./styleCadastro.css"

import {Link} from 'react-router-dom';

import imgEmail from "../../img/email.png"
import imgSenha from "../../img/senha.png"

const Cadastro = (rota) =>{

    
    const cadastroUsuario = () => {
        const nome = document.getElementById("emailInputCadastro").value;
        const senha = document.getElementById("senhaInputCadastro").value;
    
        if(nome!=="" && senha!=="") {
            fetch('http://localhost:8080/user/create', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({"nome": nome, "senha": senha})
            })
            .then(response => {
                if(!response.ok){
                    alert("Usuario ja Existe")
                }
                return response.json();
            })
            .then(data => {
                <Link to="testes"/>
            })
            .catch(error => {
                console.log('Erro com a operação fetch', error);
            });
        } else {
            alert("Senha e ou nome estão vazios")
        }
        }

        return(
            <>
                <form className="form"> 
                    <h2 className="tituloForm">Cadastro</h2>
                    <div className="containerEmail">
                        <img className="emailPng" src={imgEmail} alt="Email"/>
                        <label for="emailInputCadastro">Nome</label>
                    </div>
                    <input type="text" id="emailInputCadastro" required/>
                    <div className="containerSenha">
                        <img className="senhaPng" src={imgSenha} alt="Senha"/>
                        <label for="senhaInputCadastro">Senha</label>
                    </div>
                    <input type="password" id="senhaInputCadastro" required/>
                    <button className="btnForms" onClick={cadastroUsuario}>Cadastrar</button>
                </form>
            </>
            )
    }
export default Cadastro