import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRutaOnePageRoutingModule } from './modal-ruta-one-routing.module';

import { ModalRutaOnePage } from './modal-ruta-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRutaOnePageRoutingModule
  ],
  declarations: [ModalRutaOnePage]
})
export class ModalRutaOnePageModule {}
