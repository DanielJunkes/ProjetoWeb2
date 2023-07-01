import React, { useState, useEffect, useContext} from "react";
import "./style.css"

import {Contexto} from "../../routerProvider"

import PerguntaReponder from "./pergunta";

const ResponderTeste = () => {
    const {usuario} = useContext(Contexto)
    const {teste} = useContext(Contexto)
    let tamanho=0
    
    const [testeg, setTesteg] = useState([])
    console.log(teste);
    const getTeste = async() =>{
        try{
            await fetch('http://localhost:8080/testes/'+teste, {
                method: "GET",
                headers: {'Content-type': 'application/json'},
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTesteg(data)
            })
        } catch(e){
            console.log(e)
        }
    }

    const testeFinalizado = () => {
        console.log(usuario);

        
        console.log(tamanho);

        let certo=0
        for(let i=0; i<=tamanho; i++) {
            let seg = document.querySelector('input[name=opcao'+i+']:checked').value
            if(testeg.perguntas[0].resposta.toUpperCase() == seg) {
                console.log(testeg.perguntas[0].resposta);
                console.log(seg);
                console.log("Kk");
                certo++
            } else {
                console.log("ddd");
                console.log(testeg.perguntas[0].resposta);
                console.log(seg);

            }
            console.log(certo);
        }

        
        const result = {
            "teste": testeg.titulo,
            "nome": usuario,
            "“qtd_perguntas": tamanho,
            "qtd_acertos": certo

        }

        // try{
        //     fetch('http://localhost:8080/resultados/crate", {
        //         method: "GET",
        //         headers: {'Content-type': 'application/json'},
        //     })
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setTesteg(data)
        //     })
        // } catch(e){
        //     console.log(e)
        // }
        

        console.log(result);
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
                    {testeg.perguntas?.map((pergunta, index) => {
                        {tamanho=tamanho+1}
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