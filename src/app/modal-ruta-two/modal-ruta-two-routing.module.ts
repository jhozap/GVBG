import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRutaTwoPage } from './modal-ruta-two.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRutaTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRutaTwoPageRoutingModule {}
