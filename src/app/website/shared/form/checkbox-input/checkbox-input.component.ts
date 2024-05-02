import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="privacy-policy-field">
      <div class="input-container">
        <input type="checkbox" id="privacy-policy" [formControl]="control" required/>
        <label for="privacy-policy">Aceptar <a href="">Políticas de privacidad</a></label>
      </div>
      <ng-content select="[error]"></ng-content>
    </div>
  `,
  styleUrl: './checkbox-input.component.scss',
})
export class CheckboxInputComponent {
    @Input() control: FormControl = new FormControl();
}
