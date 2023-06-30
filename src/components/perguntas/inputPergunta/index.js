import React from "react"

const InputPergunta = () => {
    return(
        <>
            <art id="art">
                <h2 id="nome">Titulo da Pergunta: </h2>
                <input class="op" type="text" value="Add Pergunta"  />
                        
                <label for="op">Opção: </label> 
                <input type="text" id="op" class="op" />

                <label for="op">Opção: </label> 
                <input type="text" id="op" class="op" />

                <label for="op">Opção: </label> 
                <input type="text" id="op" class="op" />

                <label for="op">Opção: </label> 
                <input type="text" id="op" class="op" />

                <label for="op">Opção: </label>     
                <input type="text" id="op" class="op" />
                
                <div class="alternativacorreta">
                    <label for="alternativacorreta: ">Alternativa correta:</label>
                    <select name="cars" id="alternativacorreta">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
            </art> 
        </>
    )
}

export default InputPergunta 