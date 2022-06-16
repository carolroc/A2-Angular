import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnaHomeComponentComponent } from './ana-home-component/ana-home-component.component';
import { AnaTasksComponentComponent } from './ana-tasks-component/ana-tasks-component.component';
import { RouterModule } from '@angular/router';
import { AnaTasksServiceService } from './ana-tasks-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: AnaHomeComponentComponent},
    {path:'tarefa', component: AnaTasksComponentComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, AnaHomeComponentComponent, AnaTasksComponentComponent],
  bootstrap:    [ AppComponent ],
  providers: [AnaTasksServiceService],
})
export class AppModule { }
