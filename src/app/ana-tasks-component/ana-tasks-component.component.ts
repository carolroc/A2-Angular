import { Component, OnInit } from '@angular/core';
import { AnaTasksServiceService } from '../ana-tasks-service.service';

@Component({
  selector: 'app-ana-tasks-component',
  templateUrl: './ana-tasks-component.component.html',
  styleUrls: ['./ana-tasks-component.component.css'],
})
export class AnaTasksComponentComponent implements OnInit {
  tarefa = '';
  tarefas = [];
  constructor(public serviceTarefas: AnaTasksServiceService) {
    this.mostrarTarefas();
  }

  ngOnInit() {}

  addTarefa() {
    //alert(this.tarefa);
    this.serviceTarefas.addTarefa(this.tarefa);
    this.mostrarTarefas();
  }

  apagarTarefa(id: number) {
    this.serviceTarefas.apagarTarefa(id);
  }

  mostrarTarefas() {
    this.tarefas = this.serviceTarefas.exibirTarefas();
    //alert(this.tarefas);
    return this.tarefas;
  }
}
