import React from "react";
import Testes from '../components/testes';

import { useEffect } from "react";

// function ListarTestes() {
const ListarTestes = () => {
    
    // getTeste = () => {
    //     const Perguntas = [];
    //     fetch(this.API_URL)
    //      .then((resposta) => {
    //         return resposta.json()
    //     }).then((data => {
    //         data.map((item) => {
    //             Perguntas.push(item.title)
    //         })
    //     }))

        // this.setState({
        //     "perguntas": Perguntas
        // })
    // }

    
        return (
            <>
            {/* {this.getTeste} */}
            {/* {console.log(this.state.perguntas)} */}
                <Testes/>
                {/* Perguntas_={this.state.perguntas} */}
            </>
        )
    }

export default ListarTestes