import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./modules/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./modules/faq/faq.module').then((m) => m.FaqModule),
  },
];
