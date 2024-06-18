import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-vision-card',
  standalone: true,
  imports: [],
  template: `
    <article class="mission-vision-card" [class.lightCard]="lightCard">
      <div class="mission-vision-container">
        <div class="mission-vision-content">
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
      </div>
    </article>
  `,
  styleUrl: './mission-vision-card.component.scss',
})
export class MissionVisionCardComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() lightCard: boolean = false;
}
