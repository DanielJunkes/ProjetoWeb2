import React from "react";
import "./style.css"

import logo from "../../img/logo.png"

const Header = () => {
    return (
        <>
            <header className="header">
                <img className="logo" src={logo} alt="Cérebro"/>
                <h1 className="titulo">Teste de Memória</h1>
            </header>
        </>
    )
   }

export default Header