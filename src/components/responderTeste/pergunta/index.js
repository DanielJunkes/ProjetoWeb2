const PerguntaReponder = ({teste, index}) => {
    return(
        <>
            <h2 id="pergunta"></h2>
                <input type="text" id="pergunta" value={`Pergunta: ${teste.titulo}`} disabled/>
                <p className="instrucao">Selecione a resposta correta: </p>
                
                <input className="opcaoA" type="radio" id="opcaoA" name="opcao" value={teste.perguntas.alternaticaa}/>
                <label for="opcaoA">a) {teste.perguntas[index].alternaticaa}</label>
                <input type="radio" id="opcaoB" name="opcao" value={teste.perguntas.alternaticab} />
                <label for="opcaoB">b) {teste.perguntas.alternaticab}</label>
                <input type="radio" id="opcaoC" name="opcao" value={teste.perguntas.alternaticac} />
                <label for="opcaoC">c) {teste.perguntas.alternaticac}</label>
                <input type="radio" id="opcaoD" name="opcao" value={teste.perguntas.alternaticad} />
                <label for="opcaoD">d) {teste.perguntas.alternaticad}</label>
                <input type="radio" id="opcaoE" name="opcao" value={teste.perguntas.alternaticae} />
                <label for="opcaoE">e) {teste.perguntas.alternaticae}</label>
        </>
    )
}

export default PerguntaReponder