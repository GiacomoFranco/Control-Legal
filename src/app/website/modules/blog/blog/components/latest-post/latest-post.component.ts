import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '@app/website/interfaces/post.interface';
import { BlogPostsService } from '@app/website/services/blog-posts.service';
import { BlogPostCardComponent } from '@app/website/shared/blog-posts-section/blog-posts-card/blog-post-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-post',
  standalone: true,
  imports: [BlogPostCardComponent, AsyncPipe],
  template: `
    <section class="latest-post">
      <article class="section-container">
        <div class="content">
          @if (posts$ | async; as posts) {
            <div class="latest-post-element">
              <div class="featured-post">
                <app-blog-post-card [post]="posts[0]" />
              </div>
              <div class="secondary-latest-posts">
                <app-blog-post-card [post]="posts[1]" />
                <app-blog-post-card [post]="posts[2]" />
              </div>
            </div>
          } @else {
            <div class="latest-post-element">
              <div class="featured-post">
                <app-blog-post-card />
              </div>
              <div class="secondary-latest-posts">
                <app-blog-post-card />
                <app-blog-post-card />
              </div>
            </div>
          }
        </div>
      </article>
    </section>
  `,
  styleUrl: './latest-post.component.scss',
})
export class LatestPostComponent {
  constructor(private blogPostsService: BlogPostsService) {}
  posts$: Observable<Post[]> = this.blogPostsService.getPosts();
}
