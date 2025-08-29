import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo1',
    pathMatch: 'full',
  },
  {
    path: 'demo1',
    loadComponent: () => import('./demos/components/demo1/demo1').then(m => m.Demo1),
  },
  {
    path: 'demo2',
    loadComponent: () => import('./demos/components/demo2/demo2').then(m => m.Demo2),
  },
  {
    path: 'demo3',
    loadComponent: () => import('./demos/components/demo3/demo3').then(m => m.Demo3),
  },
  {
    path: 'demo4',
    loadComponent: () => import('./demos/components/demo4/demo4').then(m => m.Demo4),
  },
  {
    path: 'exo1',
    loadComponent: () => import('./exos/components/exo1/exo1').then(m => m.Exo1),
  },
  {
    path: 'exo2',
    loadComponent: () => import('./exos/components/exo2/exo2').then(m => m.Exo2),
  },
];
