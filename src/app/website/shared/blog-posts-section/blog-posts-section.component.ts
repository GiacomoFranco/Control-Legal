import { Component } from '@angular/core';
import { BlogPostsSwiperComponent } from './blog-posts-swiper/blog-posts-swiper.component';
import { BlogPostsSkeletonComponent } from './blog-posts-skeleton/blog-posts-skeleton.component';
import { Post } from '@app/website/interfaces/post.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BlogPostsService } from '@app/website/services/blog-posts.service';

@Component({
  selector: 'app-blog-posts-section',
  standalone: true,
  imports: [AsyncPipe, BlogPostsSwiperComponent, BlogPostsSkeletonComponent],
  templateUrl: './blog-posts-section.component.html',
  styleUrl: './blog-posts-section.component.scss',
})
export class BlogPostsSectionComponent {
  constructor(private blogPostsService: BlogPostsService) {}
  posts$: Observable<Post[]> = this.blogPostsService.getPosts();
}
