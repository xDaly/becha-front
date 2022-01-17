import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/components/signin/signin.component';
import { ContactInterfaceComponent } from '../contact/contact-interface/contact-interface.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UserinterfaceComponent } from './userinterface/userinterface.component';

const routes: Routes = [
  {
    path : "" , 
    component:UserinterfaceComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateComponent },
      { path: 'productinfo/:id', component: ProductDetailComponent },
    ]
  },
  { path: 'contact', component: ContactInterfaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
