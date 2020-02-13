import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutasInstitucionalesPageRoutingModule } from './rutas-institucionales-routing.module';

import { RutasInstitucionalesPage } from './rutas-institucionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutasInstitucionalesPageRoutingModule
  ],
  declarations: [RutasInstitucionalesPage]
})
export class RutasInstitucionalesPageModule {}
