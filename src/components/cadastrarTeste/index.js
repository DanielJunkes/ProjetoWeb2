import React, { useEffect } from "react";
import "./style.css"

import imgLapis from "../../img/pencil.png"

const CadastrarTeste = () =>{

    const addTeste = async () =>{
        try{
            const perguntasD = {pergunta: " "}
            const nome = document.getElementById("nometeste").value
            if(nome !== ''){
                 const teste = {
                titulo: nome,
                perguntas: perguntasD
            }
            const testeK = JSON.stringify(teste)
            console.log(testeK)
                await fetch('http://localhost:8080/testes/create', {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body:
                        testeK
                    })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                })
            }else{
                alert("Nome em Branco")
            }
           
        }catch(e){
            console.log(e)
        }
    }

    const listarTestes = async() =>{
        try{
            console.log("aaaa")
             await fetch('http://localhost:8080/testes/', {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        }
       catch(e){
            console.log(e)
        }
        }
        useEffect(()=>{
            listarTestes()
        }, [])
        return(
            <>
                <div className="containerConteudo">
                    <div className="containerForms">
                        <h2 className="tituloForm">Criar Teste</h2>
                            <div className="containerNome">
                                <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                                <label for="nometeste">Nome do Teste:</label>
                                <input className="inputNomeTeste" type="text" id="nometeste" required/>
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