import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RutasInstitucionalesPageRoutingModule } from './rutas-institucionales-routing.module';

import { RutasInstitucionalesPage } from './rutas-institucionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutasInstitucionalesPageRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [RutasInstitucionalesPage]
})
export class RutasInstitucionalesPageModule {}
