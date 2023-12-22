import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, loadChildren: () =>
      import('./panel/panel.routes').then(r => r.panelRoutes),
  },
];
