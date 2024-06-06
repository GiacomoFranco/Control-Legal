import { Component, Input } from '@angular/core';
import { IndicatorsComponent } from '../indicators/indicators.component';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  imports: [IndicatorsComponent],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss',
})
export class ExpertiseSectionComponent {
  @Input() rightContent: boolean;
}
