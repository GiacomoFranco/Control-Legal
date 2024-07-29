import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@app/website/interfaces/post.interface';
import { BlogPostService } from '@app/website/services/blog-post.service';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { BlogPostsSectionComponent } from '@app/website/shared/blog-posts-section/blog-posts-section.component';
import { BreadcrumbComponent } from '@app/website/shared/breadcrumb/breadcrumb.component';
import { CategoryTagComponent } from '@app/website/shared/category-tag/category-tag.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [ AskAQuestionComponent ,BlogPostsSectionComponent ,BreadcrumbComponent, AsyncPipe, CategoryTagComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent {
  post$: Observable<Post>;
  slugPost: string;

  constructor(
    private blogPostService: BlogPostService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      if (this.slugPost !== params['slug']) {
        this.slugPost = params['slug'];
        this.blogPostService.fetchPost(this.slugPost);
      }
      this.post$ = this.blogPostService.getPost();
    });
  }
}
