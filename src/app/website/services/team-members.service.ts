import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Member } from '../interfaces/member.interface';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  members$: Observable<Member[]>;

  constructor(private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.members$) {
        console.log('fetching');
        this.fetchMembers();
      }
    }
  }

  fetchMembers() {
    this.members$ = this.http.get<any>(`${this.API_URL}members`);
  }

  getMembers() {
    return this.members$;
  }
}
