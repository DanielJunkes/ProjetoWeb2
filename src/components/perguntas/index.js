import React, { useContext, useState} from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"

import {Link} from 'react-router-dom';

import  InputPergunta  from "./inputPergunta/index.js"
import imgLapis from "../../img/pencil.png"

const EditarTeste = () =>{

    const {teste} = useContext(Contexto)
    const {pergunta} = useContext(Contexto)

    const [perguntas, setPerguntas] = useState([])

    const getPergunta = async() =>{
        try {
            await fetch('http://localhost:8080/testes/'+teste, {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setPerguntas(data)
        })
        }
       catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <div class="containerConteudo">
                <div class="containerTopo">
                    <form>
                        <div className="containerNome">
                            <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                            <label for="nometeste">Nome do Teste:</label>
                            <input className="inputNomeTeste" type="text" id="nometeste" required/>
                        </div>
                        <input className="btnForms" type="submit" value="Enviar" onclick="setTeste()"/>
                    </form> 
                </div>
                <section id="sec">
                    <InputPergunta />
                </section>
                <Link to="/addpergunta">
                    <input class="btn" type="button" value="Add Pergunta"/>
                </Link>
                <div class="containerBtn">
                    <input id="salvar" class="btn" type="button" value="Salvar Alteração" />
                </div>
                <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Cancelar</button>
            </div>
        </>
    )
}

export default EditarTeste