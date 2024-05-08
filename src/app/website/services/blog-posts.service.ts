import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';



@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.posts$) {
        this.fetchPosts();
      }
    }
  }

  fetchPosts() {
    this.posts$ = this.http.get<any>(`${this.API_URL}posts`);
  }

  getPosts() {
    return this.posts$;
  }
}
