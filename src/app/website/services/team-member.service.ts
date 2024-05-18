import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Member } from '../interfaces/member.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  member$: Observable<Member[]> | any;

  constructor(private http: HttpClient) {}

  fetchMember(slug: string) {
    this.member$ = this.http.get<any>(
      `${this.API_URL}members/member?slug=${slug}`
    );
  }

  getMember() {
    return this.member$;
  }
}
