import React, { useEffect, useState } from "react";
import "./styleResultado.css"

const Resultado = () =>{
    let [resultados, setResultados] = useState([]);

    const listarResultados = async () => {
        await fetch("http://localhost:8080/result/"+sessionStorage.getItem('idUser'), {
            method: "GET",
            headers: {'Content-type': 'application/json'}
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setResultados(data)
        })
    }

    useEffect(() => {
        listarResultados()
    },[])

    return(
        <> 
            {
                resultados?.map((result, index) => {
                    return (
                        <div className="containerResultado" id={`"result${index}`}>
                            <h2 className ="tituloResultado">{result.teste}</h2>
                            <h3>Quantidade de perguntas: </h3>
                            <p>{result.qtd_perguntas}</p>
                            <h3>Quantidade de acertos:</h3>
                            <p className="acertos">{result.qtd_acertos}</p>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default Resultado