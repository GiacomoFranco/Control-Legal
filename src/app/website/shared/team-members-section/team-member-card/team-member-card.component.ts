import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss',
})
export class TeamMemberCardComponent {
  @Input('skeleton') skeleton: boolean = false;
  @Input() memberName: string;
}
