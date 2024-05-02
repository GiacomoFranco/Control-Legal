import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="form-field">
      <div class="input-container">
        <input [type]="type" [id]="fieldID" [formControl]="control" required />
        <label [for]="fieldID">{{ label }}</label>
        <div class="underline"></div>
      </div>
      <ng-content select="[error]"></ng-content>
    </div>
  `,
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() fieldID: string;
  @Input() label: string;
  @Input() type?: 'text' | 'phone' | 'email';
}
