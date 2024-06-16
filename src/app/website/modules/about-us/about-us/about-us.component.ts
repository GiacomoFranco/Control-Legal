import { Component } from '@angular/core';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';
import { ExpertiseSectionComponent } from '@app/website/shared/expertise-section/expertise-section.component';
import { SectionIntroductionComponent } from '@app/website/shared/section-introduction/section-introduction.component';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ DefaultTitleComponent , SectionIntroductionComponent,TeamMembersSectionComponent, ExpertiseSectionComponent, AskAQuestionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
