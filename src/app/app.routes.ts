import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './website/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    title: 'Servicios',
    path: 'servicios',
    loadChildren: () =>
      import('./website/modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    title: 'Sobre Nosotros',
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('./website/modules/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    title: 'Blog',
    path: 'blog',
    loadChildren: () =>
      import('./website/modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    title: 'FAQ',
    path: 'faq',
    loadChildren: () =>
      import('./website/modules/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    title: 'Contacto',
    path: 'contacto',
    loadChildren: () =>
      import('./website/modules/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
