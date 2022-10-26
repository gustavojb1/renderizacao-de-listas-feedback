import { useState } from "react";
import {
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  Titulo,
  RemoveButton

} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefasFeitas(props) {

  return (

    <ListaTarefasContainer>
      <ListaContainer>
        <Titulo>Tarefas Completas</Titulo>
        <ul>
          {props.check.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p><s>{tarefa}</s></p>
              <RemoveButton onClick={() => props.removeTarefaFeita(index)}>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
            </Tarefa>
            );
          })}
        </ul>
        
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
