import React, { useContext } from "react";
import {Contexto} from "../../routerProvider"
import "./style.css"

import {Link} from 'react-router-dom';

import imgAddTeste from "../../img/addTeste.png";
import imgAddTesteBranco from "../../img/addTesteBranco.png";
import imgListaTeste from "../../img/listaTeste.png";
import imgListaTesteBranco from "../../img/listaTesteBranco.png";
import imgResponderTeste from "../../img/responderTeste.png";
import imgResponderTesteBranco from "../../img/responderTesteBranco.png";

const Home = () =>{

    const {setRota} = useContext(Contexto)

    const handleSetRota = (valor) =>{
        setRota(valor)
    }

    const menu= {
        //aaa
            cadastrar: () => {
                return (
                    <Link to="/cadastrar">
                        <button onClick={() => handleSetRota("/addteste")}> 
                            <div className="containerBtn">
                            <p className="textoMargin">Cadastrar teste </p> 
                            <img className="imgBtn" src={imgAddTeste} alt="Adicionar teste"/>
                            <img className="hoverImg" src={imgAddTesteBranco} alt="Adicionar teste"/>
                        </div>
                        </button>
                    </Link>
                )
            },
            responder: () => {
                return (
                    <Link to="/cadastrar">
                         <button onClick={() => handleSetRota("/testes")}>
                            <div className="containerBtn">
                                <p className="textoMargin">Responder teste</p>
                                <img className="imgBtn" src={imgResponderTeste} alt="Adicionar teste"/>
                                <img className="hoverImg" src={imgResponderTesteBranco} alt="Adicionar teste"/> 
                            </div>
                        </button>
                    </Link>
                )
            },
            listarResultados: () => {
                return (
                    <Link to="/cadastrar">
                            <button onClick={() => handleSetRota("/resultados")}>
                                <div className="containerBtn">
                                    <p className="textoMargin">Lista de resultados</p> 
                                    <img className="imgBtn" src={imgListaTeste} alt="Adicionar teste"/>
                                    <img className="hoverImg" src={imgListaTesteBranco} alt="Adicionar teste"/>
                                </div>
                            </button>
                    </Link>
                )
            }
    }

        return (
            <div>
                <menu.cadastrar/>
                <menu.responder/>
                <menu.listarResultados/>
            </div>
        )
    }

export default Home