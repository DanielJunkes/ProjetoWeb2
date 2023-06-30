import React, { useState, useEffect } from "react";
import "./style.css"

import perguntaReponder from "./pergunta";

const ResponderTeste = () => {
    const [testes, setTestes] = useState([])

    const getTestes = async() =>{
        try{
             await fetch('http://localhost:8080/testes', {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTestes(data)
        })
        }
       catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getTestes()
    }, [])

    return (
        <>
           <div className="containerConteudo">
            <h2 id="nome">Teste: </h2>
            <section id="sec">
                <form action="" id="formu">
                    {testes.map((teste) => {
                        console.log(teste);
                    })}
                </form>
                <div className="containerBotoes" id="botao">
                    <input id="prox" className="btn" type="button" value="Próxima Pergunta" onclick="getReposta()"/>
                    <input id="cancelar" className="btn" type="button" value="Parar Teste" onclick="testFinalizado()"/>
                </div>
            </section>
            <button className="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/listadetestes'">Cancelar</button>
        </div>
        </>
    )
   }

export default ResponderTeste