import { Component } from '@angular/core';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeamMembersSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
