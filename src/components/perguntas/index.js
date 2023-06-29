import React from "react";
import "./style.css"

import imgLapis from "../../img/pencil.png"

const Pergunta = () =>{
    const menu = {
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
                        <div className="containerNome">
                            <img className="lapisPng" src={imgLapis} alt="Lápis"/>
                            <label for="nometeste">Nome do Teste:</label>
                            <input className="inputNomeTeste" type="text" id="nometeste" required/>
                        </div>
                        <input className="btnForms" type="submit" value="Enviar" onclick="setTeste()"/>
                    </form> 
                </>
            )
        }
    }

        return (
            <>
                <menu.cadastrar/>
                <menu.exibir/>
                <menu.responder/>
            </>
        )
    }

export default Pergunta