import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [DefaultTitleComponent, QuestionsGroupComponent, QuestionComponent, RouterLink, RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  constructor( viewportScroller : ViewportScroller) {
    viewportScroller.setOffset([0, 160])
  }
}
