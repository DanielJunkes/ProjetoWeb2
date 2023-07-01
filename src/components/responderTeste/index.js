import React, { useState, useEffect } from "react";
import "./style.css"

import PerguntaReponder from "./pergunta";

const ResponderTeste = () => {
    const [teste, setTeste] = useState([])

    const getTeste = async() =>{
        try{
            await fetch('http://localhost:8080/testes/649e4408de301c0a2fdb14fb', {
                method: "GET",
                headers: {'Content-type': 'application/json'},
            }
        )
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTeste(data[0])
        })
        }
       catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getTeste()
    }, [])

    return (
        <>
           <div className="containerConteudo">
            <h2 id="nome">Teste: </h2>
            <section id="sec">
                <form action="" id="formu">
<<<<<<< HEAD
                    {teste.perguntas.forEach(pergunta => {
                        
=======
                    {teste.perguntas?.map((pergunta, index) => {
                        return (
                           <PerguntaReponder teste ={pergunta} index = {index}/>
                        )
>>>>>>> 8eb56e6647a3aa246068047d12148205601a3a47
                    })}
                    {/* //     // console.log(teste.perguntas)
                    //     // teste.perguntas.map((teste, index) => { */}
                    {/* // //     console.log("kk");
                    // //     return (
                    // //     )
                    // // }) */}
                    
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