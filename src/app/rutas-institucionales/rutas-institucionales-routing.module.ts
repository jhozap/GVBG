import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutasInstitucionalesPage } from './rutas-institucionales.page';

const routes: Routes = [
  {
    path: '',
    component: RutasInstitucionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutasInstitucionalesPageRoutingModule {}
