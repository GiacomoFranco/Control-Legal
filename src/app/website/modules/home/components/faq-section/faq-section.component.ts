import { Component } from '@angular/core';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';
import { RedirectionComponent } from '@app/website/shared/redirection/redirection.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [QuestionsGroupComponent, QuestionComponent, RedirectionComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {

}
