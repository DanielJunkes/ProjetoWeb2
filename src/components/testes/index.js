import React from "react";
import "./style.css"



class login extends React.Component{
    render() {
        return(
            <>
                <div class="conteudo">
                    <div class="containerConteudo">
                        <h2 class="tituloConteudo">Lista de Testes</h2>
                        <div class="containerTestes">
                            <section id="sec"></section>
                            <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080'">Voltar</button>
                        </div>
                    </div>
                </div>
                <script src="./funcoes_lista_testes"></script>
            </>
        )
    }

}

export default login