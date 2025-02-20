import Tarefa from "./Tarefa";
import "./ListaDeTarefa.css"

function Lista() {
    return (
        <>

<article className="blocos">
         <Tarefa tarefa = 'Lavar a louça'/>
         <Tarefa tarefa = 'Limpar a casa'/>
         <Tarefa tarefa = 'Estudar para a prova de matemática'/>
         <Tarefa tarefa = 'Passear com o Nene'/>
         <Tarefa tarefa = 'Fazer o almoço quando chegar em casa'/>
         </article>
        </>
    )
}

export default Lista
