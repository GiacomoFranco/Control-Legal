import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  standalone: true,
  imports: [],
  template: `
    <span class="form-error" [hidden]="!validation"><img src="/assets/icons/exclamacion.svg" alt="">{{ alert }}</span>
  `,
  styleUrl: './field-error.component.scss',
})
export class FieldErrorComponent {
  @Input() validation: boolean;
  @Input() alert: string;
}
