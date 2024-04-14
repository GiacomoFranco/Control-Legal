import { Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-members-grid',
  standalone: true,
  imports: [TeamMemberCardComponent],
  templateUrl: './team-members-grid.component.html',
  styleUrl: './team-members-grid.component.scss',
})
export class TeamMembersGridComponent {
  @Input() members: object[] | undefined = undefined;
}
