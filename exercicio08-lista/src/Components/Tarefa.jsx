import { useState } from "react";

import '../components/botao.css'
import "./Usuarios.css";

function Tarefa(props) {
const [tema, setTema] = useState(false);
const [tarefa, setTarefa] = useState('Concluir')

const Botao = () => {setTema(!tema);
  setTarefa('Concluida')
  setTema(true)

  if (seguir === 'Concluida') {
    setSeguir('Concluida')
    setTema(false)
  }
  else{

    setTarefa('Concluir') 
    setTema(true) 
  }

}
return (
    <>

     <nav className="bloco">

    
          <h3><p>{props.tarefa}</p></h3>

          <button className={tema ? "Concluida" : "Concluida"} onClick={Tarefa}>  {tarefa}  </button>





          </nav>

        
    </>
  );
}

export default Tarefa;
