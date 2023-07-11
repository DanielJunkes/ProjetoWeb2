import React, { useContext, useState, useEffect} from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"

import {Link} from 'react-router-dom';

import imgLapis from "../../img/pencil.png"

const EditarTeste = () =>{
    const {teste} = useContext(Contexto)

    const [perguntas, setPerguntas] = useState([])
    const [qntPerguntas, setQntPerguntas] = useState(0)
    const [qntPerguntasSalvas, setQntPerguntasSalvas] = useState("")
    const [titulo, setTitulo] = useState("")
    
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
                setPerguntas(data.perguntas)
                // setQntPerguntasSalvas(0) // Recetar Valores
                await setQntPerguntasSalvas(perguntas.length);
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

    const salvar = () => {
        console.log(qntPerguntas);
        console.log(qntPerguntasSalvas)
        for(let i=0; i < qntPerguntas+qntPerguntasSalvas; i++) {
            const perguntas = document.querySelector(`div#pergunta${i}`).childNodes[0]
            
            console.log(perguntas.childNodes[1].value); // Titulo
            console.log(perguntas.childNodes[3].value); // Opção 1
            console.log(perguntas.childNodes[5].value); // Opção 2
            console.log(perguntas.childNodes[7].value); // Opção 3
            console.log(perguntas.childNodes[9].value); // Opção 4
            console.log(perguntas.childNodes[11].value); // Opção 5
            console.log(perguntas.childNodes[12].childNodes[1].value); // Opção correta
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
                                    <art id="art">
                                        <h2 id="nome">Titulo</h2>
                                        <input id="nomeI" type="text" value={pergunta.titulo}/>    
                                        <label for="op">Opção A: </label> 
                                        <input type="text" id="op1" className="op" value={pergunta.opcaoA}/>
                                        <label for="op">Opção B: </label> 
                                        <input type="text" id="op2" className="op" value={pergunta.opcaoB}/>
                                        <label for="op">Opção C: </label> 
                                        <input type="text" id="op3" className="op" value={pergunta.opcaoC}/>
                                        <label for="op"> D: </label> 
                                        <input type="text" id="op4" className="op" value={pergunta.opcaoD}/>
                                        <label for="op">Opção E: </label>     
                                        <input type="text" id="op5" className="op" value={pergunta.opcaoE} />
                                        <div className="alternativacorreta">
                                            <label for="alternativacorreta: ">Alternativa correta:</label>
                                            <select name="cars" id="alternativacorreta" select="A">
                                                <option selected>{pergunta.resposta}</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                            </select>
                                        </div>          
                                    </art> 
                                </div>
                            ))}
                </section>
                    <input class="btn" type="button" value="Add Pergunta" onClick={() => addPergunta()}/>
                <div class="containerBtn">
                    {/* <Link to="/addteste"> */}
                       <input id="salvar" class="btn" type="button" value="Salvar" onClick={() => {salvar()}}/> 
                    {/* </Link> */}
                </div>
                <Link to="/">
                     <button class="btnVoltar" type="button">Cancelar</button>
                </Link>
            </div>
        </>
    )
}

export default EditarTeste