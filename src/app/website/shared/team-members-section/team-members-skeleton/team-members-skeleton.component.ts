import { Component } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-members-skeleton',
  standalone: true,
  imports: [TeamMemberCardComponent],
  template: `
    @for (card of [1,2,3,4]; track $index) {
      <app-team-member-card />
    }
  `,
  styleUrl: './team-members-skeleton.component.scss',
})
export class TeamMembersSkeletonComponent {}
