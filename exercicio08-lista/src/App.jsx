import Lista from "./Components/ListaDeTarefas";
import Rodape from "./Components/Footer";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Lista de Tarefas</h1>
        <img src={logo} className="logo react" alt="React logo" />
      </header>
      <Lista />
      <div className="rodape">
        <Rodape nome="Guilherme G. Santana" />
        <Rodape nome="Hayeska L. A. Machado" />
        <Rodape nome="Leonardo M. Vicente" />
        <Rodape nome="Quezia A. Vieira" />
      </div>
    </>
  );
}

export default App;
