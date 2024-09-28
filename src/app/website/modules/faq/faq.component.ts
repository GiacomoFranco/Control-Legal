import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { QuestionsService } from '@app/website/services/questions.service';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    DefaultTitleComponent,
    QuestionsGroupComponent,
    QuestionComponent,
    AskAQuestionComponent,
    RouterLink,
    RouterModule,
    AsyncPipe,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  constructor(
    viewportScroller: ViewportScroller,
    private questions: QuestionsService,
  ) {
    viewportScroller.setOffset([0, 160]);
  }


  questions$: Observable<any[]> = this.questions.getQuestions();
}
