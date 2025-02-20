import Tarefa from "./Tarefa";
import "./ListaDeTarefa.css"

function Lista() {
    return (
        <>

<article className="blocos">
         <Tarefa tarefa = 'lavar a louça'/>
         <Tarefa tarefa = 'limpar a casa'/>
         <Tarefa tarefa = 'estudar para a prova de matemática'/>
         <Tarefa tarefa = 'passear com o Nene'/>
         <Tarefa tarefa = 'fazer o almoço qnd chegar em casa'/>
         </article>
        </>
    )
}

export default Lista
