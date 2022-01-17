import { CUSTOM_ELEMENTS_SCHEMA,NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgImageSliderModule } from 'ng-image-slider';

import { UserRoutingModule } from './user-routing.module';
import { UserinterfaceComponent } from './userinterface/userinterface.component';
import { SharedModule } from '../shared/shared.module';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { WorkComponent } from './components/work/work.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { counterReducer } from './store/store';
import { StoreModule } from '@ngrx/store';


@NgModule({
 
  declarations: [
    UserinterfaceComponent,
    BottombarComponent,
    HomeComponent,
    CreateComponent,
    WorkComponent,
    ShopsComponent,
    ProductDetailComponent,
    ProfileComponent

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    FormsModule,
    ImageCropperModule,
    NgImageSliderModule,
    SharedModule,
    NgSelectModule,
    UserRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
