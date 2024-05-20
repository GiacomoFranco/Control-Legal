import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MemberComponent } from './member/member.component';

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
    component: MemberComponent,
    data: { breadcrumb: 'Nuestro equipo', url: '../../' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsComponent,
    MemberComponent,
    RouterModule.forChild(routes),
  ],
})
export class AboutUsModule {}
