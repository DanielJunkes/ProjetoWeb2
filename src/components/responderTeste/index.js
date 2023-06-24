import React from "react";
import "./style.css"

class responderTeste extends React.Component {
   render() {
    return (
        <>
           <div class="containerConteudo">
            <h2 id="nome">Teste: </h2>
            <section id="sec">
                <form action="" id="formu">
                    <h2 id="pergunta"></h2>
                    <input type="text" id="pergunta" value="Pergunta:" disabled/>
                    <p class="instrucao">Selecione a resposta correta: </p>
                    <input class="opcaoA" type="radio" id="opcaoA" name="opcao" value=""/>
                    <label for="opcaoA">a)</label>
                    <input type="radio" id="opcaoB" name="opcao" value=""/>
                    <label for="opcaoB">b)</label>
                    <input type="radio" id="opcaoC" name="opcao" value=""/>
                    <label for="opcaoC">c)</label>
                    <input type="radio" id="opcaoD" name="opcao" value=""/>
                    <label for="opcaoD">d)</label>
                    <input type="radio" id="opcaoE" name="opcao" value=""/>
                    <label for="opcaoE">e)</label>
                </form>
                <div class="containerBotoes" id="botao">
                    <input id="prox" class="btn" type="button" value="Próxima Pergunta" onclick="getReposta()"/>
                    <input id="cancelar" class="btn" type="button" value="Parar Teste" onclick="testFinalizado()"/>
                </div>
            </section>
            <button class="btnVoltar" type="button" onclick="window.location = 'http://localhost:8080/listadetestes'">Cancelar</button>
        </div>
        </>
    )
   }
}

export default responderTeste