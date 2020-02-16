import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutasInstitucionalesPageRoutingModule } from './rutas-institucionales-routing.module';

import { RutasInstitucionalesPage } from './rutas-institucionales.page';
import { ModalRutaOnePage } from '../modal-ruta-one/modal-ruta-one.page';
import { ModalRutaTwoPage } from '../modal-ruta-two/modal-ruta-two.page';
import { ModalRutaThreePage } from '../modal-ruta-three/modal-ruta-three.page';
import { ModalRutaOnePageModule } from '../modal-ruta-one/modal-ruta-one.module';
import { ModalRutaTwoPageModule } from '../modal-ruta-two/modal-ruta-two.module';
import { ModalRutaThreePageModule } from '../modal-ruta-three/modal-ruta-three.module';

@NgModule({
  entryComponents: [
    ModalRutaOnePage,
    ModalRutaTwoPage,
    ModalRutaThreePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRutaOnePageModule,
    ModalRutaTwoPageModule,
    ModalRutaThreePageModule,
    RutasInstitucionalesPageRoutingModule
  ],
  declarations: [RutasInstitucionalesPage]
})
export class RutasInstitucionalesPageModule {}
