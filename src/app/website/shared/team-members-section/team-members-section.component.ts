import { Component } from '@angular/core';
import { TeamMembersComponent } from './team-members/team-members.component';

@Component({
  selector: 'app-team-members-section',
  standalone: true,
  imports: [TeamMembersComponent],
  templateUrl: './team-members-section.component.html',
  styleUrl: './team-members-section.component.scss',
})
export class TeamMembersSectionComponent {}
