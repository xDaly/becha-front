import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmininterfaceComponent } from './admininterface/admininterface.component';

const routes: Routes = [
  {
    path : "" , 
    component:AdmininterfaceComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
