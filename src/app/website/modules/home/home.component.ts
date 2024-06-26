import { Component } from '@angular/core';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { BlogPostsSectionComponent } from '@app/website/shared/blog-posts-section/blog-posts-section.component';
import { BannerComponent } from './components/banner/banner.component';
import { LegalServicesSectionComponent } from '@app/website/shared/legal-services-section/legal-services-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    LegalServicesSectionComponent,
    TeamMembersSectionComponent,
    MetricsComponent,
    AskAQuestionComponent,
    BlogPostsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
