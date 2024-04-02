import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: '/nuestro-equipo', component: OurTeamComponent },
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
