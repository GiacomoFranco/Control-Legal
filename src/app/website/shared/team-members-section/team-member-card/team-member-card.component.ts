import { Component, Input } from '@angular/core';
import { RedirectionButtonComponent } from '../../redirection-button/redirection-button.component';
import { Member } from '@app/website/interfaces/member.interface';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [RedirectionButtonComponent],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss',
})
export class TeamMemberCardComponent {
  @Input() member: Member;
}
