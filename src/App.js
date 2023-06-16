import Header from "./components/header"
import Home from "./components/home"
import Resultado from "./components/resultadoTeste"
import Pergunta from "./components/perguntas"
import Cadastro from "./components/cadastro"
import Login from "./components/login"
import Botao from "./components/botoes"



function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Resultado/>
     <Pergunta/>
     <Cadastro/>
     <Login/>
     <Botao/>
    </div>
  );
}

export default App;
