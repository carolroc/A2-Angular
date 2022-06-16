import { Component, OnInit } from '@angular/core';
import { AnaTasksServiceService } from '../ana-tasks-service.service';

@Component({
  selector: 'app-ana-home-component',
  templateUrl: './ana-home-component.component.html',
  styleUrls: ['./ana-home-component.component.css'],
})
export class AnaHomeComponentComponent implements OnInit {
  constructor(public serviceTarefas: AnaTasksServiceService) {}

  ngOnInit() {}

  count() {
    return this.serviceTarefas.contarTarefas();
  }
}
