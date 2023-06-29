import React from "react";
import "./style.css"

import { useEffect } from "react";


const Login = () =>{
    
    const getTeste = async () => {
        const numTest="";
        try {
            const response = await fetch('http://localhost:8080/testes')
            const data = await response.json();
            console.log(data);
            for(let teste of data) {
    
                numTest++;
                return(
                    <>
                        <article id={'teste'+numTest}>
                            <h1>{teste[numTest].title}</h1>
                            <button type="button" value="Responder Teste" onClick="window.location='http://localhost:8080/teste'"></button>
                        </article>
                    </>
                    
                )
            }
        } catch(erro) {
            console.log(erro);
        }
        }
       useEffect(()=>{
        getTeste()
        }, []) 
        return(
            <>
                <div className="conteudo">
                    <div className="containerConteudo">
                        <h2 className="tituloConteudo">Lista de Testes</h2>
                        <div className="containerTestes">
                            <section id="sec">
                            </section>
                            <button className="btnVoltar" type="button" onClick="window.location = 'http://localhost:3000'">Voltar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default Login