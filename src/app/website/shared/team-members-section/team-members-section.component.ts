import { AfterViewInit, Component } from '@angular/core';
import { timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';
import { TeamMembersSwiperComponent } from './team-members-swiper/team-members-swiper.component';

@Component({
  selector: 'app-team-members-section',
  standalone: true,
  imports: [ AsyncPipe, TeamMembersGridComponent, TeamMembersSwiperComponent],
  templateUrl: './team-members-section.component.html',
  styleUrl: './team-members-section.component.scss',
})
export class TeamMembersSectionComponent implements AfterViewInit {
  members$: any;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      timer(30000).subscribe(() => {
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
