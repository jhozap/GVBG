import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRutaTwoPageRoutingModule } from './modal-ruta-two-routing.module';

import { ModalRutaTwoPage } from './modal-ruta-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRutaTwoPageRoutingModule
  ],
  declarations: [ModalRutaTwoPage]
})
export class ModalRutaTwoPageModule {}
