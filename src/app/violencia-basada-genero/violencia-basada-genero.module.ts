import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaBasadaGeneroPageRoutingModule } from './violencia-basada-genero-routing.module';

import { ViolenciaBasadaGeneroPage } from './violencia-basada-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaBasadaGeneroPageRoutingModule
  ],
  declarations: [ViolenciaBasadaGeneroPage]
})
export class ViolenciaBasadaGeneroPageModule {}
