import React from "react";
import { useState } from "react";
import "./style.css"

import { useEffect } from "react";


const Login = () =>{
    
    const [testes, setTestes] = useState([])

    const getTestes = async() =>{
        try{
             await fetch('http://localhost:8080/testes/', {
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
        return(
            <>
                <div className="conteudo">
                    <div className="containerConteudo">
                        <h2 className="tituloConteudo">Lista de Testes</h2>
                        <div className="containerTestes">
                            <section id="sec">
                            {testes.map((teste, index)=>(
                                <div key={index}>
                                    <h1>{teste.titulo}</h1>
                                    <button>Responder</button>
                                </div>
                            ))}
                            </section>
                            <button className="btnVoltar" type="button" onClick="window.location = 'http://localhost:3000'">Voltar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default Login