import React from "react";
import Axios from 'axios'
import Testes from '../components/testes';

import { useEffect } from "react";

// function ListarTestes() {
class ListarTestes extends React.Component {
    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:8080/testes"
        this.state = {
            "perguntas": [{
                "id":"0",
            "title": "abc"
            },
            {
                "title": "123"
        }]
        }
    }
    
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

    render() {
    
        return (
            <>
            {/* {this.getTeste} */}
            {/* {console.log(this.state.perguntas)} */}
                <Testes Perguntas_={this.state.perguntas}/>
                {/* Perguntas_={this.state.perguntas} */}
            </>
        )
    }
}

export default ListarTestes