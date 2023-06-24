import React from "react";
import "./style.css"

import imgLapis from "../../img/pencil.png"

class pergunta extends React.Component{
    menu = {
        responder: () => {
            return(
                <>
                    <form action="" id="formu">
                        <h2 id="pergunta"></h2>

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
                </>
            )
        },

        exibir: () => {
            return (
                <>
                    <section>
                        <h2 id="titulodapergunta" class="op opE00">Titulo da pergunta</h2>
                        <label></label>
                    </section>
                </>
            )
        },

        cadastrar: () => {
            return(
                <>
                    <form action="http://localhost:8081/add" method="POST">
                        <div class="containerNome">
                            <img class="lapisPng" src={imgLapis} alt="Lápis"/>
                            <label for="nometeste">Nome do Teste:</label>
                            <input class="inputNomeTeste" type="text" id="nometeste" required/>
                        </div>
                        <input class="btnForms" type="submit" value="Enviar" onclick="setTeste()"/>
                    </form> 
                </>
            )
        }
    }

    render () {
        return (
            <>
                <this.menu.cadastrar/>
                <this.menu.exibir/>
                <this.menu.responder/>
            </>
        )
    }
}

export default pergunta