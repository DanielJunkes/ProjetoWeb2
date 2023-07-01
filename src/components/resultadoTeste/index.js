import React from "react";
import "./styleResultado.css"


const Resultado = () =>{
        return(
            <div className="containerResultado "id="result${indice}">
                <h2 className ="tituloResultado">result.teste</h2>
                <h3>Quantidade de perguntas: </h3>
                <p>result.qtd_perguntas</p>
                <h3>Quantidade de acertos:</h3>
                <p className="acertos">result.qtd_acertos</p>
            </div>
        )
    }

export default Resultado