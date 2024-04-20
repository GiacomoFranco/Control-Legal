import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';
import { TeamMembersSwiperComponent } from './team-members-swiper/team-members-swiper.component';
import { HttpClient } from '@angular/common/http';
import { Member } from '@app/website/interfaces/member.interface';

@Component({
  selector: 'app-team-members-section',
  standalone: true,
  imports: [AsyncPipe, TeamMembersGridComponent, TeamMembersSwiperComponent],
  templateUrl: './team-members-section.component.html',
  styleUrl: './team-members-section.component.scss',
})
export class TeamMembersSectionComponent implements OnInit {
  constructor(private http: HttpClient) {}

  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];

  // members$: Observable<object[]> = this.http.get<any>(`${this.API_URL}members`);
  members$: Observable<Member[]>;

  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // this.members$ = this.http.get<any>('https://fakestoreapi.com/products?limit=4');
      this.members$ = this.http.get<any>(`${this.API_URL}members`);
    }
  }
}
