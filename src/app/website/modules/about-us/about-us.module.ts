import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    data: { breadcrumb: 'Nosotros' },
  },
  {
    path: 'nuestro-equipo',
    redirectTo: '',
  },
  {
    path: 'nuestro-equipo/:slug',
    component: OurTeamComponent,
    data: { breadcrumb: 'Nuestro equipo', url: '../../' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsComponent,
    OurTeamComponent,
    RouterModule.forChild(routes),
  ],
})
export class AboutUsModule {}
