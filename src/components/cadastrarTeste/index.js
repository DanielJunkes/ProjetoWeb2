import React from "react";
import "./style.css"

import imgLapis from "../../img/pencil.png"

class cadastrarTeste extends React.Component{
    render() {
        return(
            <>
                <div class="containerConteudo">
                    <div class="containerForms">
                        <h2 class="tituloForm">Criar Teste</h2>
                        <form action="http://localhost:8081/add" method="POST">
                            <div class="containerNome">
                                <img class="lapisPng" src={imgLapis} alt="Lápis"/>
                                <label for="nometeste">Nome do Teste:</label>
                                <input class="inputNomeTeste" type="text" id="nometeste" required/>
                            </div>
                            <input class="btnForms" type="submit" value="Enviar" onclick="setTeste()"/>
                        </form> 
                        </div>
                        <h2 class="testeCriado">Testes Criados</h2>
                        <section id="sec"></section>
                        <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/'">Voltar</button>
                    </div>
            </>
        )
    }

}

export default cadastrarTeste