import React, {createElement, useContext} from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"

import  InputPergunta  from "./inputPergunta/index.js"
import imgLapis from "../../img/pencil.png"

const Pergunta = () =>{

    const {teste} = useContext(Contexto)

    console.log(teste)

    const addPergunta = () => {
        const sec = document.getElementById("sec")
        const pergunta = createElement(<InputPergunta/>)
        sec.append(<InputPergunta/>)
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
                <input class="btn" type="button" value="Add Pergunta" onClick={addPergunta} />
                <div class="containerBtn">
                    <input id="salvar" class="btn" type="button" value="Salvar Alteração" onclick="salvarPergunta()" />
                </div>
                <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Cancelar</button>
            </div>
        </>
    )
}

export default Pergunta