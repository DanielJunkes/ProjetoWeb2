import React from "react";
import "./style.css"

class home extends React.Component{
    menu= {
            cadastrar: () => {
                return (
                    <>
                        <button onclick="window.location = 'http://localhost:8080/login'"> 
                            <div class="containerBtn">
                            <p class="textoMargin">Cadastrar teste </p> 
                            <img class="imgBtn" src="../img/addTeste.png" alt="Adicionar teste"/>
                            <img class="hoverImg" src="../img/addTesteBranco.png" alt="Adicionar teste"/>
                        </div>
                        </button>
                    </>
                )
            },
            responder: () => {
                return (
                    <>
                         <button onclick="window.location = 'http://localhost:8080/listadetestes'">
                            <div class="containerBtn">
                                <p class="textoMargin">Responder teste</p>
                                <img class="imgBtn" src="../img/responderTeste.png" alt="Adicionar teste"/>
                                <img class="hoverImg" src="../img/responderTesteBranco.png" alt="Adicionar teste"/> 
                            </div>
                        </button>
                    </>
                )
            },
            listarResultados: () => {
                return (
                    <>
                        <button onclick="window.location = 'http://localhost:8080/resultados'">
                            <div class="containerBtn">
                                <p>Lista de resultados</p> 
                                <img class="imgBtn" src="../img/listaTeste.png" alt="Adicionar teste"/>
                                <img class="hoverImg" src="../img/listaTesteBranco.png" alt="Adicionar teste"/>
                            </div>
                        </button>
                    </>
                )
            }
    }

    render() {
        return (
            <div>
                <this.menu.cadastrar/>
                <this.menu.responder/>
                <this.menu.listarResultados/>
            </div>
        )
    }
}

export default home