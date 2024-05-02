import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-textarea-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="input-container">
      <textarea name="" id="" cols="30" rows="1" id="contact-message" [formControl]="control" required ></textarea>
      <label for="contact-message">Escribe tu pregunta acá</label>
      <div class="underline"></div>
    </div>
    <ng-content select="[error]"></ng-content>
  `,
  styleUrl: './textarea-input.component.scss',
})
export class TextareaInputComponent {
    @Input() control: FormControl = new FormControl();
}
