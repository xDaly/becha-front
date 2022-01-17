import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInterfaceComponent } from './contact-interface/contact-interface.component';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactInterfaceComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
