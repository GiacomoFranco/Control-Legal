import { Component } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-members-skeleton',
  standalone: true,
  imports: [TeamMemberCardComponent],
  template: `
    @for (card of skeletonArray; track $index) {
      <app-team-member-card class="skeleton-card"/>
    }
  `,
  styleUrl: './team-members-skeleton.component.scss',
})
export class TeamMembersSkeletonComponent {
  skeletonArray: any[] = Array(4)
}
