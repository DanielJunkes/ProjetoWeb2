import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import "./styleResponder.css"
import {Contexto} from "../../routerProvider"
import PerguntaReponder from "./pergunta";

const ResponderTeste = () => {
    const {usuario} = useContext(Contexto)
    const {idUsuario} = useContext(Contexto)
    const {teste} = useContext(Contexto)
    let tamanho=0
    
    const [testeg, setTesteg] = useState([])
    
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
        for(let i=0; i<tamanho; i++) {
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
            "nome": sessionStorage.getItem('nome'),
            "idUser": sessionStorage.getItem('idUser'),
            "qtd_perguntas": tamanho,
            "qtd_acertos": certo
        }

        try{
            fetch('http://localhost:8080/result/create', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(result)
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
                    <Link to="/">
                        <input id="cancelar" className="btn" type="button" value="Encerrar Teste" onClick={testeFinalizado}/>

                    </Link>
                </div>
            <button className="btnVoltar" type="button" >Cancelar</button>
        </div>
        </>
    )
   }

export default ResponderTeste