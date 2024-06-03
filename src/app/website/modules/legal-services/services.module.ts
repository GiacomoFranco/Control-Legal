import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LegalServicesComponent } from './legal-services/legal-services.component';
import { LegalServiceComponent } from './legal-service/legal-service.component';

const routes: Routes = [
  { path: '', component: LegalServicesComponent },
  { path: ':slug', component: LegalServiceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LegalServiceComponent,
    RouterModule.forChild(routes),
  ],
})
export class ServicesModule {}