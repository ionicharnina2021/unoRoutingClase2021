import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'primera',
    loadChildren: () => import('./primera/primera.module').then( m => m.PrimeraPageModule)
  },
  // Si paso datos no puedo llamar a la pagina sin pasar datos
  {
    path: 'cinco/:cartelito',
    loadChildren: () => import('./cinco/cinco.module').then( m => m.CincoPageModule)
  },
  {
    path: 'seis/:personaje',
    loadChildren: () => import('./seis/seis.module').then( m => m.SeisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
