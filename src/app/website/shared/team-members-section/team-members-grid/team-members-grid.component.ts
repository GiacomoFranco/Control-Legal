import { Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-members-grid',
  standalone: true,
  imports: [TeamMemberCardComponent],
  template: `
    @for (member of members; track $index) {
      <app-team-member-card [memberName]="member" />
    } @empty {
      @for (card of [1,2,3,4]; track $index) {
        <app-team-member-card [skeleton]="true"/>
      }
    }
  `,
  styleUrl: './team-members-grid.component.scss',
})
export class TeamMembersGridComponent {
  @Input() members: object[] | undefined = undefined;
}
