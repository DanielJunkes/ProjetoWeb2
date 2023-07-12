import React, { useContext, useState, useEffect} from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"
import InputPergunta from "./inputPergunta";

import {Link} from 'react-router-dom';

import imgLapis from "../../img/pencil.png"

const EditarTeste = () =>{
    const {teste} = useContext(Contexto)

    const [perguntas, setPerguntas] = useState([])
    const [qntPerguntas, setQntPerguntas] = useState(0)
    // const [qntPerguntasSalvas, setQntPerguntasSalvas] = useState("")
    const [titulo, setTitulo] = useState("")
    const [idTeste, setIdTeste] = useState("")
    
    const getPergunta = async() =>{
        //Recetar valroes
        // setQntPerguntas(0)
        
        try {
            await fetch('http://localhost:8080/testes/'+teste, {
                method: "GET",
                headers: {'Content-type': 'application/json'},
                })
            .then(response => {
                return response.json()
            })
            .then(async data => {
                setTitulo(data.titulo)
                setIdTeste(data._id)
                setPerguntas(data.perguntas)
            })
        } catch(e){
            console.log(e)
        }
    }

    const addPergunta = () =>{
        setQntPerguntas(qntPerguntas+1);

        const novaPergunta = {
            titulo: "",
            opcaoA: "",
            opcaoB: "",
            opcaoC: "",
            opcaoD: "",
            opcaoE: "",
            resposta: ""
        }
        setPerguntas([...perguntas, novaPergunta])
    }

    const btnSalvar = () => {
        const qntPerguntasSalvas = perguntas.length-qntPerguntas;
        let listaNovasPerguntas = []

        for(let i=0; i < qntPerguntas+qntPerguntasSalvas; i++) {
            if(i>qntPerguntasSalvas-1) {
                const perguntas = document.querySelector(`div#pergunta${i}`).childNodes[0];
                
                const novaPergunta = {
                    titulo: perguntas.childNodes[1].value, // Titulo
                    opcaoA: perguntas.childNodes[3].value, // Opção 1
                    opcaoB: perguntas.childNodes[5].value, // Opção 1
                    opcaoC: perguntas.childNodes[7].value, // Opção 3
                    opcaoD: perguntas.childNodes[9].value, // Opção 4
                    opcaoE: perguntas.childNodes[11].value, // Opção 5
                    resposta: perguntas.childNodes[12].childNodes[1].value // Opção correta
                }
                listaNovasPerguntas.push(novaPergunta)
            }
        }

        salvarNoBanco(listaNovasPerguntas)
    }

    const salvarNoBanco = async (novaPergunta) => {
        let listaPerguntas = [];

        try {
            await fetch('http://localhost:8080/testes/'+idTeste, {
                method: "GET",
                headers: {'Content-type': 'application/json'},
            })
            .then(response => {
                return response.json()
            })
            .then(async data => {
                listaPerguntas = data.perguntas
            })
        } catch(e){
            console.log(e)
        }

        let novaLista = listaPerguntas.concat(novaPergunta);
        
        const dados = {
                id: teste,
                perguntas: novaLista
        }

        const dadosJ = JSON.stringify(dados)

        try {
            await fetch('http://localhost:8080/testes/update', {
                method: "PUT",
                headers: {'Content-type': 'application/json'},
                body: dadosJ
            })
        } catch(e){
            console.log(e)
        }
    }

    const deletar = async () =>{
        const dados = {
            id: teste
        }
        const dadosS = JSON.stringify(dados)
        try {
            await fetch('http://localhost:8080/testes/delete', {
            method: "DELETE",
            headers: {'Content-type': 'application/json'},
            body: dadosS
            })
        .then(response => {
            if(response.ok){
                alert("Teste Excluido com Sucesso")
            }
        })
        }
       catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        setQntPerguntas(0) // Recetar Variavel

        getPergunta()
    }, [])

    return(
        <>
            <div class="containerConteudo">
                <div class="containerTopo">
                    <form>
                        <div className="containerNome">
                            <div>
                                <img className="lapisPng" src={imgLapis}  alt="Lápis"/>
                            </div>
                            <label for="nometeste">Nome do Teste:</label>
                            <input className="inputNomeTeste" type="text" id="nometeste" value={titulo} required/>
                            <Link to="/addteste">
                            <input type="button" value="Excluir Teste" onClick={() => deletar()}/>
                            </Link>
                        </div>
                    </form> 
                </div>
                <section id="sec">
                {perguntas.map((pergunta, index)=>(
                    <div id={`pergunta${index}`} key={index}>
                        <InputPergunta pergunta={pergunta}/>
                    </div>
                    ))}
                </section>
                    <input class="btn" type="button" value="Add Pergunta" onClick={() => {addPergunta()}}/>
                <div class="containerBtn">
                    <Link to="/addteste">
                       <input id="salvar" class="btn" type="button" value="Salvar" onClick={() => {btnSalvar()}}/> 
                    </Link>
                </div>
                <Link to="/">
                     <button class="btnVoltar" type="button">Cancelar</button>
                </Link>
            </div>
        </>
    )
}

export default EditarTeste