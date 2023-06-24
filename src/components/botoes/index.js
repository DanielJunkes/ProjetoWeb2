import React from "react";
import "./style.css"

class login extends React.Component{
    menu = {
        voltar: () => {
            return (
                <>
                    <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Voltar</button>
                </>
            )
        },

        cancelar: () => {
            return (
                <>
                    <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Cancelar</button>
                </>
            )
        },

        proximo: () => {
            return (
                <>
                    <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/login/cadastrodetestes'">Proximo</button>
                </>
            )
        },

    }

    render() {
        return(
            <>
                <this.menu.voltar/>
                <this.menu.cancelar/>
                <this.menu.proximo/>
            </>
        )
    }

}

export default login