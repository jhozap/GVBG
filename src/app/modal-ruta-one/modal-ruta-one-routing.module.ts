import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRutaOnePage } from './modal-ruta-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRutaOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRutaOnePageRoutingModule {}
