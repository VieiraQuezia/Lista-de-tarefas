import Lista from './Components/ListaDeTarefas'

import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <>
    <header>
            
            <h1>Lista de Tarefas</h1>
             <img src={logo} className="logo react" alt="React logo" />
            
         </header>
      <Lista/>
    </>
  )
}

export default App
