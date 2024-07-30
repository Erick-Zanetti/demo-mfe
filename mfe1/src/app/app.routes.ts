import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'crud',
    loadComponent: () => import('./crud/crud.component').then(m => m.CrudComponent),
    children: [
      {
        path: 'create',
        loadComponent: () => import('./crud/create/create.component').then(m => m.CreateComponent)
      },
      {
        path: 'read',
        loadComponent: () => import('./crud/read/read.component').then(m => m.ReadComponent)
      },
      {
        path: 'update',
        loadComponent: () => import('./crud/update/update.component').then(m => m.UpdateComponent)
      },
      {
        path: 'delete',
        loadComponent: () => import('./crud/delete/delete.component').then(m => m.DeleteComponent)
      },
      {
        path: '',
        redirectTo: 'read',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'crud',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'crud'
  }
];
