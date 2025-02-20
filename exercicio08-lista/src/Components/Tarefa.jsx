import { useState } from "react";
import './Tarefa.css'

function Tarefa(props) {
const [tema, setTema] = useState(false);
const [tarefa, setTarefa] = useState('Concluir')

const Botao = () => {setTema(!tema);
  setTarefa('Concluida ✔')
  setTema(true)

  if (tarefa === 'Concluida ✔') {
    setTarefa('Concluir')
    setTema(false)
  }
  else{

    setTarefa('Concluida ✔') 
    setTema(true) 
  }

}
return (
    <>


     <nav className={tema ? "bloco_Concluida" : "bloco_Concluir"}>

    
          <p>{props.tarefa}</p>

          <button  onClick={Botao}>  {tarefa}  </button>

          </nav>

        
    </>
  );
}

export default Tarefa;
