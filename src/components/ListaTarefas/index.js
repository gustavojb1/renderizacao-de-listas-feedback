import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaTarefasFeitas } from "../ListaTarefasFeitas/index";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [check, setCheck] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const enter =(event) =>{
    if(event.keyCode===13){
      adicionaTarefa()
    }
  }

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };


  const removeTarefa = (indexTarefa) => {
    const listaFiltrada = lista.filter((item, index)=>{
      return index !== indexTarefa
    })
    setLista(listaFiltrada);

    const tarefaFeita = lista.filter((item, index)=>{
      return index === indexTarefa
    })
    const listaFeita = [...check, tarefaFeita];
    setCheck(listaFeita);
  };

  const removeTarefaFeita = (indexTarefa) =>{
    const listaFiltradaFeita = check.filter((item, index)=>{
      return index !== indexTarefa
    })
    setCheck(listaFiltradaFeita);
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={enter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
        <ListaTarefasFeitas check={check} removeTarefaFeita={removeTarefaFeita}/>
        {/* <ul>
          {check.map((tarefa, index) => {
            return (
              <TarefaCompleta key={index}>
                <p><s>{tarefa}</s></p>
                <RemoveButton onClick={() => removeTarefaFeita(index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </TarefaCompleta>
            );
          })}
        </ul> */}
      </ListaContainer>
      <LinhaHorizontal/>
    </ListaTarefasContainer>
  );
}
