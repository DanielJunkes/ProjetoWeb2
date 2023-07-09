import React, { useContext, useState, useEffect} from "react";
import {Contexto} from '../../routerProvider'
import "./style.css"

import {Link} from 'react-router-dom';

import imgLapis from "../../img/pencil.png"

const EditarTeste = () =>{

    const {teste} = useContext(Contexto)

    const [perguntas, setPerguntas] = useState([])

    const getPergunta = async() =>{
        try {
            await fetch('http://localhost:8080/testes/'+teste, {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPerguntas(data.perguntas)
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
                            <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                            <label for="nometeste">Nome do Teste:</label>
                            <input className="inputNomeTeste" type="text" id="nometeste" required/>
                        </div>
                    </form> 
                </div>
                <section id="sec">
                {perguntas.map((pergunta, index)=>(
                                <div key={index}>
                                    <art id="art">
                                    <h2 id="nome">Titulo</h2>
                                    <input id="nomeI" type="text" value={pergunta.titulo} disabled/>    
                                    <label for="op">Opção A: </label> 
                                    <input type="text" id="op1" className="op" value={pergunta.opcaoA} disabled/>
                                    <label for="op">Opção B: </label> 
                                    <input type="text" id="op2" className="op" value={pergunta.opcaoB} disabled/>
                                    <label for="op">Opção C: </label> 
                                    <input type="text" id="op3" className="op" value={pergunta.opcaoC} disabled/>
                                    <label for="op"> D: </label> 
                                    <input type="text" id="op4" className="op" value={pergunta.opcaoD} disabled/>
                                    <label for="op">Opção E: </label>     
                                    <input type="text" id="op5" className="op" value={pergunta.opcaoE} disabled />
                                    <div className="alternativacorreta"/>
                                    <label for="alternativacorreta: ">Alternativa correta: {pergunta.resposta}</label>
                                    </art> 
                                </div>
                            ))}
                </section>
                <Link to="/addpergunta">
                    <input class="btn" type="button" value="Add Pergunta"/>
                </Link>
                <div class="containerBtn">
                    <Link to="/addteste">
                       <input id="salvar" class="btn" type="button" value="Finalizar" /> 
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