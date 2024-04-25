import { Component } from '@angular/core';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeamMembersSectionComponent, MetricsComponent, AskAQuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
