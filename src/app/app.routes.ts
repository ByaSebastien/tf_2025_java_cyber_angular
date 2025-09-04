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
    path: 'demo5',
    loadComponent: () => import('./demos/components/demo5/demo5').then(m => m.Demo5),
  },
  {
    path: 'demo5/:id',
    loadComponent: () => import('./demos/components/demo5/demo5-detail/demo5-detail').then(m => m.Demo5Detail),
  },
  {
    path: 'demo6',
    loadComponent: () => import('./demos/components/demo6/demo6').then(m => m.Demo6),
  },
  {
    path: 'exo1',
    loadComponent: () => import('./exos/components/exo1/exo1').then(m => m.Exo1),
  },
  {
    path: 'exo2',
    loadComponent: () => import('./exos/components/exo2/exo2').then(m => m.Exo2),
  },
  {
    path: 'exo3',
    loadComponent: () => import('./exos/components/exo3/exo3').then(m => m.Exo3),
  },
];
