import { Component } from '@angular/core';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { ExpertiseSectionComponent } from '@app/website/shared/expertise-section/expertise-section.component';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TeamMembersSectionComponent, ExpertiseSectionComponent, AskAQuestionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
