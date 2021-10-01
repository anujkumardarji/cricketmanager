import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageRoutingModule } from './admin-route.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
