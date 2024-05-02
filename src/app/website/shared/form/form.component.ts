import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="sendMail()">
      <ng-content></ng-content>
    </form>
  `,
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  @Input('formGroup') form: FormGroup = new FormGroup({});

  sendMail() {
    this.form.markAllAsTouched();
    console.log(this.form.value);
  }
}
