import React from "react";
import { useState, useContext, useEffect} from "react";
import "./styleListaTestes.css"

import {Contexto} from "../../routerProvider"
import { Link } from "react-router-dom";

const Login = () =>{
    const {setTeste} = useContext(Contexto)
    const handleSetTeste = (valor) =>{
        setTeste(valor)
    }
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
                                <div className="conteudoSec" key={index}>
                                    <h1>{teste.titulo}</h1>
                                    <Link to="/responder">
                                        <button onClick={() => handleSetTeste(teste._id)}>Responder</button>
                                    </Link>
                                </div>
                            ))}
                            </section>
                            <button className="btnVoltar" type="button" >Voltar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default Login