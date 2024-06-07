import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  post$: Observable<Post> | any;

  constructor(private http: HttpClient) {}

  fetchPost(slug: string) {
    this.post$ = this.http.get<any>(`${this.API_URL}posts/post?slug=${slug}`);
  }

  getPost() {
    return this.post$;
  }
}
