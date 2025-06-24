import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  template: `
    <button>
      {{ text }}
      <img
        class="arrow-icon"
        src="/assets/icons/redirection-arrow-black.svg"
        alt="ícono enviar pregunta"
      />
    </button>
  `,
  styleUrl: './submit-button.component.scss',
})
export class SubmitButtonComponent {
  @Input() text: string;

  printHello() {
    console.log('hello');
  }
}
