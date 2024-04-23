import { Component } from '@angular/core';
import { IndicatorComponent } from './indicator/indicator.component';

@Component({
  selector: 'app-indicators',
  standalone: true,
  imports: [IndicatorComponent],
  template: `
    <app-indicator />
    <app-indicator />
  `,
  styleUrl: './indicators.component.scss',
})
export class IndicatorsComponent {}
