import { Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { Member } from '@app/website/interfaces/member.interface';

@Component({
  selector: 'app-team-members-grid',
  standalone: true,
  imports: [TeamMemberCardComponent],
  template: `
    @for (member of members; track $index) {
      <app-team-member-card [member]="member" />
    } @empty {
      @for (card of [1,2,3,4]; track $index) {
        <app-team-member-card />
      }
    }
  `,
  styleUrl: './team-members-grid.component.scss',
})
export class TeamMembersGridComponent {
  @Input() members: Member[] | undefined = undefined;
}
