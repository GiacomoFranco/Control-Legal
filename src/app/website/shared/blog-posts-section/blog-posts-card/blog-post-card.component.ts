import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '@app/website/interfaces/post.interface';

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss',
})
export class BlogPostCardComponent {
  @Input() post: Post;
}
