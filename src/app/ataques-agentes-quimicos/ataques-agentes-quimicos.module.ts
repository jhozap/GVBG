import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquesAgentesQuimicosPageRoutingModule } from './ataques-agentes-quimicos-routing.module';

import { AtaquesAgentesQuimicosPage } from './ataques-agentes-quimicos.page';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  entryComponents: [
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    AtaquesAgentesQuimicosPageRoutingModule
  ],
  declarations: [AtaquesAgentesQuimicosPage]
})
export class AtaquesAgentesQuimicosPageModule {}
