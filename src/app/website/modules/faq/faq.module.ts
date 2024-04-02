import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: FaqComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, FaqComponent, RouterModule.forChild(routes)],
})
export class FaqModule {}
