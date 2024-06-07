import { Component } from '@angular/core';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { BlogPostsSectionComponent } from '@app/website/shared/blog-posts-section/blog-posts-section.component';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    DefaultTitleComponent,
    BlogPostsSectionComponent,
    AskAQuestionComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
