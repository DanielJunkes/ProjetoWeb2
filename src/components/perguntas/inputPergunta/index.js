import React, { useContext } from "react";
import {Contexto} from "../../../routerProvider"

import {Link} from 'react-router-dom';

const InputPergunta = () => {

    const {setPergunta} = useContext(Contexto)

    const handleSetPergunta = (valor) =>{
        setPergunta(valor)
    }

    const addPergunta = () =>{
        const nome = document.getElementById("nomeI").value
        const opcaoA = document.getElementById("op1").value
        const opcaoB = document.getElementById("op2").value
        const opcaoC = document.getElementById("op3").value
        const opcaoD = document.getElementById("op4").value
        const opcaoE = document.getElementById("op5").value
        const opcaoCerta = document.getElementById("alternativacorreta").value

        const novaPergunta = {
            Pergunta: nome,
            opcaoA: opcaoA,
            opcaoB: opcaoB,
            opcaoC: opcaoC,
            opcaoD: opcaoD,
            opcaoE: opcaoE,
            opcaoCorreta: opcaoCerta
        }

        handleSetPergunta(novaPergunta)
        
    }

    return(
        <>
            <art id="art">
                <h2 id="nome">Titulo da Pergunta: </h2>
                <input id="nomeI" type="text"  />    
                <label for="op">Opção A: </label> 
                <input type="text" id="op1" className="op" />
                <label for="op">Opção B: </label> 
                <input type="text" id="op2" className="op" />
                <label for="op">Opção C: </label> 
                <input type="text" id="op3" className="op" />
                <label for="op"> D: </label> 
                <input type="text" id="op4" className="op" />
                <label for="op">Opção E: </label>     
                <input type="text" id="op5" className="op" />
                <div className="alternativacorreta">
                    <label for="alternativacorreta: ">Alternativa correta:</label>
                    <select name="cars" id="alternativacorreta">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
                <Link to="/editarteste">
                    <input type="button" value="Adicionar Pergunta" onClick={addPergunta}/>
                </Link>  
            </art> 
        </>
    )
}

export default InputPergunta 