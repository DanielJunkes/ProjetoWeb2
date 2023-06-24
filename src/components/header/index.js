import React from "react";
import "./style.css"

import logo from "../../img/logo.png"

class header extends React.Component {
   render() {
    return (
        <>
            <header class="header">
                <img class="logo" src={logo} alt="Cérebro"/>
                <h1 class="titulo">Teste de Memória</h1>
            </header>
        </>
    )
   }
}

export default header