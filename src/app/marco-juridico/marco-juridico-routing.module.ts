import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcoJuridicoPage } from './marco-juridico.page';

const routes: Routes = [
  {
    path: '',
    component: MarcoJuridicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcoJuridicoPageRoutingModule {}
