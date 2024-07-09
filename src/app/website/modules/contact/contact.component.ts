import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckboxInputComponent } from '@app/website/shared/form/checkbox-input/checkbox-input.component';
import { FieldErrorComponent } from '@app/website/shared/form/field-error/field-error.component';
import { FormComponent } from '@app/website/shared/form/form.component';
import { SubmitButtonComponent } from '@app/website/shared/form/submit-button/submit-button.component';
import { TextInputComponent } from '@app/website/shared/form/text-input/text-input.component';
import { TextareaInputComponent } from '@app/website/shared/form/textarea-input/textarea-input.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormComponent,
    TextInputComponent,
    TextareaInputComponent,
    FieldErrorComponent,
    CheckboxInputComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.min(1234567890),
      Validators.max(12345678901),
    ]),
    subject: new FormControl('', Validators.required),
    question: new FormControl('', Validators.required),
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

  get subject(): FormControl {
    return this.form.get('subject') as FormControl;
  }

  get question(): FormControl {
    return this.form.get('question') as FormControl;
  }
  get terms(): FormControl {
    return this.form.get('terms') as FormControl;
  }
}
