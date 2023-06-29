import React from "react";
import "./style.css"

import imgLapis from "../../img/pencil.png"
import { useState } from "react";

const CadastrarTeste = () =>{

    const [nomeDoTeste, setNomeDoTeste] = useState("");

    const handleInputChange = ({value}) => {
        console.log(value)
        setNomeDoTeste(value)
    }

    const addTeste = async () =>{
        try{
            console.log(nomeDoTeste)
                await fetch('http://localhost:8080/testes/create', {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: {
                        teste: nomeDoTeste,
                        perguntas: "",
                    }
                })
        }catch(e){
            console.log(e)
        }
    }

        return(
            <>
                <div className="containerConteudo">
                    <div className="containerForms">
                        <h2 className="tituloForm">Criar Teste</h2>
                            <div className="containerNome">
                                <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                                <label for="nometeste">Nome do Teste:</label>
                                <input className="inputNomeTeste" type="text" id="nometeste" onChange={(e) => handleInputChange(e.target.value)} value={nomeDoTeste} required/>
                            </div>
                            <button className="btnForms"  value="Enviar" onClick={addTeste}/>
                        </div>
                        <h2 className="testeCriado">Testes Criados</h2>
                        <section id="sec"></section>
                        <button className="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/'">Voltar</button>
                    </div>
            </>
        )
    }


export default CadastrarTeste