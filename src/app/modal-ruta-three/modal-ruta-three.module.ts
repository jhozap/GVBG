import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRutaThreePageRoutingModule } from './modal-ruta-three-routing.module';

import { ModalRutaThreePage } from './modal-ruta-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRutaThreePageRoutingModule
  ],
  declarations: [ModalRutaThreePage]
})
export class ModalRutaThreePageModule {}
