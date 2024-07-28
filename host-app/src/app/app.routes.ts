import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.Mfe1Module).catch((err) => {
        console.error('Error loading mfe1 module:', err);
        throw err;
      }),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Module',
      }).then((m) => m.Mfe2Module).catch((err) => {
        console.error('Error loading mfe2 module:', err);
        throw err;
      }),
  },
];
