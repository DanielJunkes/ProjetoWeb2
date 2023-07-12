import React, { useContext, useState, useEffect} from "react";

const InputPergunta = (pergunta) => {

    const perguntaA = pergunta.pergunta

    const [titulo, setTitulo] = useState("")
    const [opcaoA, setOpcaoA] = useState("")
    const [opcaoB, setOpcaoB] = useState("")
    const [opcaoC, setOpcaoC] = useState("")
    const [opcaoD, setOpcaoD] = useState("")
    const [opcaoE, setOpcaoE] = useState("")
    const [resposta, setResposta] = useState("")

    useEffect(()=>{
       setTitulo(perguntaA.titulo)
       setOpcaoA(perguntaA.opcaoA)
       setOpcaoB(perguntaA.opcaoB)
       setOpcaoC(perguntaA.opcaoC)
       setOpcaoD(perguntaA.opcaoD)
       setOpcaoE(perguntaA.opcaoE)
       setResposta(perguntaA.resposta)
    }, [])

    return(
        <>
            <art id="art">
                <h2 id="nome">Titulo da Pergunta: </h2>
                <input id="nomeI" type="text" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>    
                <label for="op">Opção A: </label> 
                <input type="text" id="op1" className="op" value={opcaoA} onChange={(e)=>{setOpcaoA(e.target.value)}}/>
                <label for="op">Opção B: </label> 
                <input type="text" id="op2" className="op" value={opcaoB} onChange={(e)=>{setOpcaoB(e.target.value)}}/>
                <label for="op">Opção C: </label> 
                <input type="text" id="op3" className="op" value={opcaoC} onChange={(e)=>{setOpcaoC(e.target.value)}}/>
                <label for="op"> D: </label> 
                <input type="text" id="op4" className="op" value={opcaoD} onChange={(e)=>{setOpcaoD(e.target.value)}}/>
                <label for="op">Opção E: </label>     
                <input type="text" id="op5" className="op" value={opcaoE} onChange={(e)=>{setOpcaoE(e.target.value)}}/>
                <div className="alternativacorreta">
                    <label for="alternativacorreta: ">Alternativa correta:</label>
                    <select name="cars" id="alternativacorreta" select="A" onChange={(e)=>{setResposta(e.target.value)}}>
                        <option selected>{resposta}</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
            </art> 
        </>
    )
}

export default InputPergunta 