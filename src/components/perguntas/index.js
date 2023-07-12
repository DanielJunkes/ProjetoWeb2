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
    const [titulo, setTitulo] = useState("")
    const [idTeste, setIdTeste] = useState("")
    
    const getPergunta = async() =>{
        
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
        let listaNovasPerguntas = []
        let salvar = true
        for(let i=0; i < perguntas.length; i++) {
                const perguntas = document.querySelector(`div#pergunta${i}`).childNodes[0];
                
                if(perguntas.childNodes[1].value===""){
                    alert("Titulo Inválido")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[3].value===""){
                    alert("Opção Inválida")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[5].value===""){
                    alert("Opção Inválida")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[7].value===""){
                    alert("Opção Inválida")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[9].value===""){
                    alert("Opção Inválida")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[11].value===""){
                    alert("Opção Inválida")
                    salvar = false
                    break;
                }else if(perguntas.childNodes[12].childNodes[1].value===""){
                    alert("Seleciona a Alternativa Correta")
                    salvar = false
                    break;
                }else{
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
        if(salvar){
            salvarNoBanco(listaNovasPerguntas)
            window.location="http://localhost:3000/addteste"
        } 
    }

    const salvarNoBanco = async (novaPergunta) => {
        
        const dados = {
                id: teste,
                perguntas: novaPergunta
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
                       <input id="salvar" class="btn" type="button" value="Salvar" onClick={() => {btnSalvar()}}/> 
                </div>
                <Link to="/">
                     <button class="btnVoltar" type="button">Cancelar</button>
                </Link>
            </div>
        </>
    )
}

export default EditarTeste