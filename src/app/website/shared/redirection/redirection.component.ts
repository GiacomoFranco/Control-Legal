import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-redirection',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="url">{{ text }} <img src="/assets/icons/redirection-arrow.svg" [alt]="iconAltProp"/></a>
  `,
  styleUrl: './redirection.component.scss',
})
export class RedirectionComponent {
  @Input() text: string;
  @Input() url: string;
  @Input() iconAltProp: string = 'Ir a la sección';
}
