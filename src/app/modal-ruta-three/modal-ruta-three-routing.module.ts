import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRutaThreePage } from './modal-ruta-three.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRutaThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRutaThreePageRoutingModule {}
