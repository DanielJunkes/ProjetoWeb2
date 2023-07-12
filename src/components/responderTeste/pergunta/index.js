const PerguntaReponder = ({teste, index}) => {
    return(
        <>
            <h2 id="pergunta"></h2>
                <input type="text" id="pergunta" value={`Pergunta: ${teste.titulo}`} disabled/>
                <p className="instrucao">Selecione a resposta correta: </p>
                <label for={`opcaoA${index}`}>a) {teste.opcaoA}</label>
                <input className={`opcaoA${index}`} type="radio" id={`opcaoA${index}`} name={`opcao${index}`} value="A"/>
                <label for={`opcaoB${index}`}>b) {teste.opcaoB}</label>
                <input type="radio" id={`opcaoB${index}`} name={`opcao${index}`} value="B" />
                <label for={`opcaoC${index}`}>c) {teste.opcaoC}</label>
                <input type="radio" id={`opcaoC${index}`} name={`opcao${index}`} value="C" />
                <label for={`opcaoD${index}`}>d) {teste.opcaoD}</label>
                <input type="radio" id={`opcaoD${index}`} name={`opcao${index}`} value="D" />
                <label for={`opcaoE${index}`}>e) {teste.opcaoD}</label>
                <input type="radio" id={`opcaoE${index}`} name={`opcao${index}`} value="E" />
        </>
    )
}

export default PerguntaReponder