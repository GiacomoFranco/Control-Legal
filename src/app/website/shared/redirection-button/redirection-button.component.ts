import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirection-button',
  standalone: true,
  imports: [],
  template: `
    <a href="">
      <img src="/assets/images/redirection-arrow.svg" [alt]="iconAltProp"/>
    </a>
  `,
  styleUrl: './redirection-button.component.scss',
})
export class RedirectionButtonComponent {
  @Input('iconAltProp') iconAltProp = 'Ver miembro del equipo'
}
