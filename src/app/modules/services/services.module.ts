import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: '/:slug', component: ServiceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesComponent,
    ServiceComponent,
    RouterModule.forChild(routes),
  ],
})
export class ServicesModule {}
