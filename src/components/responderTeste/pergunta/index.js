const perguntaReponder = () => {
    return(
        <>
            <h2 id="pergunta"></h2>
                <input type="text" id="pergunta" value="Pergunta:" disabled/>
                <p className="instrucao">Selecione a resposta correta: </p>
                <input className="opcaoA" type="radio" id="opcaoA" name="opcao" value=""/>
                <label for="opcaoA">a)</label>
                <input type="radio" id="opcaoB" name="opcao" value=""/>
                <label for="opcaoB">b)</label>
                <input type="radio" id="opcaoC" name="opcao" value=""/>
                <label for="opcaoC">c)</label>
                <input type="radio" id="opcaoD" name="opcao" value=""/>
                <label for="opcaoD">d)</label>
                <input type="radio" id="opcaoE" name="opcao" value=""/>
                <label for="opcaoE">e)</label>
        </>
    )
}

export default perguntaReponder