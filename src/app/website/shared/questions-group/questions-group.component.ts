import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-group',
  standalone: true,
  imports: [],
  template: `
    <h2>{{ groupTitle }}</h2>

    <ng-content> </ng-content>
  `,
  styleUrl: './questions-group.component.scss',
})
export class QuestionsGroupComponent {
  @Input() groupTitle: string = 'Preguntas';
}
