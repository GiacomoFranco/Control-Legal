import { Component } from '@angular/core';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';
import { MetricsComponent } from './components/metrics/metrics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeamMembersSectionComponent, MetricsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
