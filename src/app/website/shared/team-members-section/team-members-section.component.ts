import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';
import { TeamMembersSwiperComponent } from './team-members-swiper/team-members-swiper.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-members-section',
  standalone: true,
  imports: [AsyncPipe, TeamMembersGridComponent, TeamMembersSwiperComponent],
  templateUrl: './team-members-section.component.html',
  styleUrl: './team-members-section.component.scss',
})
export class TeamMembersSectionComponent {
  constructor(private http: HttpClient) {}

  members$: Observable<object[]> = this.http.get<any>('https://fakestoreapi.com/products?limit=10');
}
