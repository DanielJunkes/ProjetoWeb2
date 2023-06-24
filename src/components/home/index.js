import React from "react";
import "./style.css"

import {Link} from 'react-router-dom';

import imgAddTeste from "../../img/addTeste.png";
import imgAddTesteBranco from "../../img/addTesteBranco.png";
import imgListaTeste from "../../img/listaTeste.png";
import imgListaTesteBranco from "../../img/listaTesteBranco.png";
import imgResponderTeste from "../../img/responderTeste.png";
import imgResponderTesteBranco from "../../img/responderTesteBranco.png";

class home extends React.Component{
    
    menu= {
            cadastrar: () => {
                return (
                    <Link to="/cadastrar">
                        <button> 
                            <div class="containerBtn">
                            <p class="textoMargin">Cadastrar teste </p> 
                            <img class="imgBtn" src={imgAddTeste} alt="Adicionar teste"/>
                            <img class="hoverImg" src={imgAddTesteBranco} alt="Adicionar teste"/>
                        </div>
                        </button>
                    </Link>
                )
            },
            responder: () => {
                return (
                    <Link to="/cadastrar">
                         <button>
                            <div class="containerBtn">
                                <p class="textoMargin">Responder teste</p>
                                <img class="imgBtn" src={imgResponderTeste} alt="Adicionar teste"/>
                                <img class="hoverImg" src={imgResponderTesteBranco} alt="Adicionar teste"/> 
                            </div>
                        </button>
                    </Link>
                )
            },
            listarResultados: () => {
                return (
                    <Link to="/cadastrar">
                            <button>
                                <div class="containerBtn">
                                    <p class="textoMargin">Lista de resultados</p> 
                                    <img class="imgBtn" src={imgListaTeste} alt="Adicionar teste"/>
                                    <img class="hoverImg" src={imgListaTesteBranco} alt="Adicionar teste"/>
                                </div>
                            </button>
                    </Link>
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