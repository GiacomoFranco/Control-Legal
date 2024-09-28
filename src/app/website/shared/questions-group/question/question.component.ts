import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  template: `
    <div class="single-question">
      <div (click)="toggleQuestion()" class="question-title">
        <h4>{{ question }}</h4>
        <img src="/assets/icons/arrow-up-down.svg" alt="Desplegar pregunta" />
      </div>
      <div
        class="question-answer"
        [class.active]="toggleStatus"
        [innerHTML]="answer"
      >
      </div>
    </div>
  `,
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() question: string =
    '¿Cuánto tiempo suele tomar resolver un caso legal típico?';
  @Input() answer: string =
    'La duración de un caso legal típico varía según diversos factores, como su complejidad, las leyes pertinentes y la cooperación de las partes involucradas. Algunos casos pueden resolverse en semanas o meses, mientras que otros pueden extenderse por años. La estimación del tiempo necesario para resolver un caso específico depende de una evaluación detallada de su situación por parte de un abogado, quien considerará todos los elementos relevantes para proporcionar una estimación más precisa. <br /><br /> Es esencial discutir esta cuestión con un profesional legal, ya que pueden brindar orientación sobre los tiempos aproximados y los pasos involucrados en el proceso legal, adaptándose a las circunstancias únicas de cada caso.';
  toggleStatus: boolean = false;

  toggleQuestion() {
    this.toggleStatus = !this.toggleStatus;
  }
}
