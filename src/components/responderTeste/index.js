import React, { useState, useEffect, useContext} from "react";
import "./styleResponder.css"

import {Contexto} from "../../routerProvider"

import PerguntaReponder from "./pergunta";

const ResponderTeste = () => {
    const {usuario} = useContext(Contexto)
   
    const [teste, setTeste] = useState([])
    
    const getTeste = async() =>{
        try{
            await fetch('http://localhost:8080/testes/649e4408de301c0a2fdb14fb', {
                method: "GET",
                headers: {'Content-type': 'application/json'},
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTeste(data)
            })
        } catch(e){
            console.log(e)
        }
    }

    const testeFinalizado = () => {
        console.log(usuario);

        const result = {
            "teste": "teste",
            "nome": ""
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
                    {teste.perguntas?.map((pergunta, index) => {
                        return (
                           <PerguntaReponder teste ={pergunta} index = {index}/>
                        )
                    })}
                    {/* //     // console.log(teste.perguntas)
                    //     // teste.perguntas.map((teste, index) => { */}
                    {/* // //     console.log("kk");
                    // //     return (
                    // //     )
                    // // }) */}
                    
                </form>
            </section>
                <div className="containerBotoes" id="botao">
                    <input id="cancelar" className="btn" type="button" value="Encerrar Teste" onClick={testeFinalizado}/>
                </div>
            <button className="btnVoltar" type="button" >Cancelar</button>
        </div>
        </>
    )
   }

export default ResponderTeste