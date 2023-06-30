import React, { useEffect, useState, useContext } from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"

import {Link} from 'react-router-dom';

import imgLapis from "../../img/pencil.png"

const CadastrarTeste = () =>{

    const {setTeste} = useContext(Contexto)

    const handleSetTeste = (valor) =>{
        setTeste(valor)
    }

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
                })
            }else{
                alert("Nome em Branco")
            }
           
        }catch(e){
            console.log(e)
        }
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
                <div className="containerConteudo">
                    <div className="containerForms">
                        <h2 className="tituloForm">Criar Teste</h2>
                            <div className="containerNome">
                                <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                                <label for="nometeste">Nome do Teste:</label>
                                <input className="inputNomeTeste" type="text" id="nometeste" required/>
                            </div>
                            <button className="btnForms" value="Enviar" onClick={addTeste}>Adicionar</button>
                        </div>
                        <h2 className="testeCriado">Testes Criados</h2>
                        <section id="sec">
                            {testes.map((teste, index)=>(
                                <div key={index}>
                                    <h1>{teste.titulo}</h1>
                                    <Link to="/addpergunta">
                                       <button value={teste._id} onClick={(e) => e.target.value}>Editar</button> 
                                    </Link>
                                </div>
                            ))}
                        </section>
                        <button className="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/'">Voltar</button>
                    </div>
            </>
        )
    }


export default CadastrarTeste