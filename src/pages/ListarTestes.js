import React from "react";
import Testes from '../components/testes/index';


class ListarTestes extends React.Component() {
    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:8080/data/herois"
        this.state = {
            "herois": [],
            "selecionado": null
        }
    }

    
    getTestes = () => {
        const requisicao = fetch(this.API_URL)
         .then((resposta) => {
            this.setState({
                "herois": resposta.data
            })
        })  
    }

    render() {
        return (
            <>
                <Testes nome="aa"/>
            </>
        )
    }
}

export default ListarTestes