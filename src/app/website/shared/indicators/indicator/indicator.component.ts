import { Component } from '@angular/core';

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [],
  template: `
    <h3 class="indicator-value">20k+</h3>
    <p class="indicator-text">Sabemos que el tiempo es dinero, por eso</p>
  `,
  styleUrl: './indicator.component.scss',
})
export class IndicatorComponent {}
