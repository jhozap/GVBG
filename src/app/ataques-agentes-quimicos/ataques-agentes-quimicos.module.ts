import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquesAgentesQuimicosPageRoutingModule } from './ataques-agentes-quimicos-routing.module';

import { AtaquesAgentesQuimicosPage } from './ataques-agentes-quimicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtaquesAgentesQuimicosPageRoutingModule
  ],
  declarations: [AtaquesAgentesQuimicosPage]
})
export class AtaquesAgentesQuimicosPageModule {}
