import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirection-button',
  standalone: true,
  imports: [],
  template: `
    <a href="">
      <img src="/assets/icons/redirection-arrow.svg" [alt]="iconAltProp" />
    </a>
  `,
  styleUrl: './redirection-button.component.scss',
})
export class RedirectionButtonComponent {
  @Input('iconAltProp') iconAltProp: string = 'Botón redirigir';
}
