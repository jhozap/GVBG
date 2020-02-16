import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'glosario',
    loadChildren: () => import('./glosario/glosario.module').then( m => m.GlosarioPageModule)
  },
  {
    path: 'violencia-basada-genero',
    loadChildren: () => import('./violencia-basada-genero/violencia-basada-genero.module').then( m => m.ViolenciaBasadaGeneroPageModule)
  },
  {
    path: 'marco-juridico',
    loadChildren: () => import('./marco-juridico/marco-juridico.module').then( m => m.MarcoJuridicoPageModule)
  },
  {
    path: 'ataques-agentes-quimicos',
    loadChildren: () => import('./ataques-agentes-quimicos/ataques-agentes-quimicos.module').then( m => m.AtaquesAgentesQuimicosPageModule)
  },
  {
    path: 'rutas-institucionales',
    loadChildren: () => import('./rutas-institucionales/rutas-institucionales.module').then( m => m.RutasInstitucionalesPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'modal-ruta-one',
    loadChildren: () => import('./modal-ruta-one/modal-ruta-one.module').then( m => m.ModalRutaOnePageModule)
  },
  {
    path: 'modal-ruta-two',
    loadChildren: () => import('./modal-ruta-two/modal-ruta-two.module').then( m => m.ModalRutaTwoPageModule)
  },
  {
    path: 'modal-ruta-three',
    loadChildren: () => import('./modal-ruta-three/modal-ruta-three.module').then( m => m.ModalRutaThreePageModule)
  },
  // {
  //   path: 'modal',
  //   loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
