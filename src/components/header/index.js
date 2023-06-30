import React from "react";
import "./style.css"

import logo from "../../img/logo.png"
//Logo2 = Logo Escuro
import logo_2 from "../../img/logo2.png"

const Header = () => {
    return (
        <>
            <header className="header">
                <img className="logo" src={logo_2} alt="Cérebro"/>
                <h1 className="titulo">Teste de Memória</h1>
            </header>
        </>
    )
   }

export default Header