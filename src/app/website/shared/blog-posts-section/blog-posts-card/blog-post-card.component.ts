import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '@app/website/interfaces/post.interface';
import { CategoryTagComponent } from '../../category-tag/category-tag.component';

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [RouterLink, CategoryTagComponent],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss',
})
export class BlogPostCardComponent {
  @Input() post: Post;
}
