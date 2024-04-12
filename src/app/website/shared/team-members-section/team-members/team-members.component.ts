import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { TeamMembersGridComponent } from '../team-members-grid/team-members-grid.component';
import { TeamMembersSwiperComponent } from '../team-members-swiper/team-members-swiper.component';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [AsyncPipe, TeamMembersGridComponent, TeamMembersSwiperComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss',
})
export class TeamMembersComponent {

  members$: any;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      timer(100000).subscribe(() => {
        this.members$ = ['Test Name 1', 'Test Name 2'];
      });
      // timer(6000).subscribe(() => {
      //   this.members$ = [
      //     'Test Name 1',
      //     'Test Name 2',
      //     'Test Name 3',
      //     'Test Name 4',
      //     'Test Name 5',
      //   ];
      // });
    }
  }
}
