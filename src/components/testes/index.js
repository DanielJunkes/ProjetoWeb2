import React from "react";
import "./style.css"

const numTest="";

class login extends React.Component{
    
    getTeste = async () => {
        try {
            const response = await fetch('http://localhost:8080/testes')
            const data = await response.json();
            console.log(data);
            for(let teste of data) {
    
                numTest++;
                console.log(teste);
    
                //cria o html com o nome dos testes
                var art = document.createElement("article")
                art.setAttribute("id", "teste"+numTest)
    
                var htmlTeste = document.createElement("h1")
                var txtTeste = document.createTextNode(teste.title)
    
                var botao = document.createElement("input")
                botao.type = "button"
                botao.setAttribute("value", "Responder Teste")
                botao.setAttribute("onClick", "window.location='http://localhost:8080/teste'")
    
                htmlTeste.appendChild(txtTeste)
    
                art.appendChild(htmlTeste)
                art.appendChild(botao)
                return(
                    {art}
                    
                )
            }
        } catch(erro) {
            console.log(erro);
        }
    }
    
    render() {
        // let html = ""
        // var lista = this.props.Perguntas_

        // console.log(lista);

        // html = lista.map((item) => { 
        //     return (
        //         <>
        //             <article id={item.id}>
        //                 <h1>{item.title}</h1>
        //             </article>
        //         </>

        //     )
        // })


         

        return(
            <>
                <div class="conteudo">
                    <div class="containerConteudo">
                        <h2 class="tituloConteudo">Lista de Testes</h2>
                        <div class="containerTestes">
                            <section id="sec">
                               {this.getTeste}
                            </section>
                            <button class="btnVoltar" type="button" onClick="window.location = 'http://localhost:8080'">Voltar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default login