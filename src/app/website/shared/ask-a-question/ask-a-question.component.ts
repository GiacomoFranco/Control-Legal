import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TextInputComponent } from '../form/text-input/text-input.component';
import { FieldErrorComponent } from '../form/field-error/field-error.component';
import { CheckboxInputComponent } from '../form/checkbox-input/checkbox-input.component';
import { TextareaInputComponent } from '../form/textarea-input/textarea-input.component';
import { SubmitButtonComponent } from '../form/submit-button/submit-button.component';

@Component({
  selector: 'app-ask-a-question',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormComponent,
    TextInputComponent,
    FieldErrorComponent,
    CheckboxInputComponent,
    TextareaInputComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './ask-a-question.component.html',
  styleUrl: './ask-a-question.component.scss',
})
export class AskAQuestionComponent {
  constructor() {}

  @Input() backgroundColor: string;

  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.min(1234567890),
      Validators.max(12345678901),
    ]),
    message: new FormControl('', Validators.required),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get message(): FormControl {
    return this.form.get('message') as FormControl;
  }
  get terms(): FormControl {
    return this.form.get('terms') as FormControl;
  }
}
