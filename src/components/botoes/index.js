import React from "react";
import "./style.css"

const Botoes = () =>{
    menu = {
        voltar: () => {
            return (
                <>
                    <button className="btnVoltar" type="button" onClick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Voltar</button>
                </>
            )
        },

        cancelar: () => {
            return (
                <>
                    <button className="btnVoltar" type="button" onClick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Cancelar</button>
                </>
            )
        },

        proximo: () => {
            return (
                <>
                    <button className="btnVoltar" type="button" onClick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Proximo</button>
                </>
            )
        },

    }

        return(
            <>
                <this.menu.voltar/>
                <this.menu.cancelar/>
                <this.menu.proximo/>
            </>
        )
    }


export default Botoes