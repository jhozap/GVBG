import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcoJuridicoPageRoutingModule } from './marco-juridico-routing.module';

import { MarcoJuridicoPage } from './marco-juridico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcoJuridicoPageRoutingModule
  ],
  declarations: [MarcoJuridicoPage]
})
export class MarcoJuridicoPageModule {}
