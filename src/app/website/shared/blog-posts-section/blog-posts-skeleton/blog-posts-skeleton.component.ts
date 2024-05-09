import { Component } from '@angular/core';
import { BlogPostCardComponent } from '../blog-posts-card/blog-post-card.component';

@Component({
  selector: 'app-blog-posts-skeleton',
  standalone: true,
  imports: [BlogPostCardComponent],
  template: `
    @for (card of skeletonArray; track $index) {
    <app-blog-post-card class="skeleton-card" />
    }
  `,
  styleUrl: './blog-posts-skeleton.component.scss',
})
export class BlogPostsSkeletonComponent {
  skeletonArray: any[] = Array(3);
}
