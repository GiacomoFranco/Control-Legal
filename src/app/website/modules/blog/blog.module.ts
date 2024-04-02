import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'post', redirectTo: '' },
  { path: 'post/:slug', component: BlogPostComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogComponent,
    BlogPostComponent,
    RouterModule.forChild(routes),
  ],
})
export class BlogModule {}
