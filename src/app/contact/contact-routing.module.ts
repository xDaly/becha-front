import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../user/components/home/home.component';
import { ContactInterfaceComponent } from './contact-interface/contact-interface.component';


const routes: Routes = [
  {
    path : "" , 
    component:ContactInterfaceComponent,
    children: [
     
    ]
  },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
