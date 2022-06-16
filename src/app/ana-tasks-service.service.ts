import { Injectable } from '@angular/core';

@Injectable()
export class AnaTasksServiceService {
  tarefas = [];

  constructor() { }

  addTarefa(tarefa:string){
    this.tarefas.push(tarefa);
  }

  apagarTarefa(id:number){
    this.tarefas.splice(id,1);
  }

  contarTarefas(){
    return this.tarefas.length;
  }

  exibirTarefas(){
    return this.tarefas;
  }

}