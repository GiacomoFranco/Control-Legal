import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-group',
  standalone: true,
  imports: [],
  template: `
    @if (groupTitle) {
      <h2 [id]="id">{{ groupTitle }}</h2>
    }

    <ng-content> </ng-content>
    <ng-content select="[redirection]"></ng-content>
  `,
  styleUrl: './questions-group.component.scss',
})
export class QuestionsGroupComponent {
  @Input() groupTitle: string;
  @Input() id: string;

  idParser(): string {
    return `${this.groupTitle.toLowerCase().replace(' ', '-')}`;
  }
}
