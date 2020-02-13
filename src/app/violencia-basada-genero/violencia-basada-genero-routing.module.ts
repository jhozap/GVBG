import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaBasadaGeneroPage } from './violencia-basada-genero.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaBasadaGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaBasadaGeneroPageRoutingModule {}
