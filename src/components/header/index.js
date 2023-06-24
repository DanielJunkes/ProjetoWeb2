import React from "react";
import "./style.css"

class header extends React.Component {
   render() {
    return (
        <>
            <header class="header">
                <img class="logo" src="../img/logo.png" alt="Cérebro"/>
                <h1 class="titulo">Teste de Memória</h1>
            </header>
        </>
    )
   }
}

export default header