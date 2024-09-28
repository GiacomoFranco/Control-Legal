import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralQuestionsService } from '@app/website/services/general-questions.service';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';
import { RedirectionComponent } from '@app/website/shared/redirection/redirection.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [QuestionsGroupComponent, QuestionComponent, RedirectionComponent, AsyncPipe],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {

  constructor(private questions: GeneralQuestionsService ) {}

  questions$: Observable<any[]> = this.questions.getQuestions();
}
