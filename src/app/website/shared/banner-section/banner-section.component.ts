import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [],
  template: `
    <div class="banner-section">
      <img class="background-image" [src]="imageUrl" alt="Abogados Control Legal" />
      <img class="logo" src="/assets/icons/logo-control-legal.svg" alt="Control Legal Logo">
    </div>
  `,
  styleUrl: './banner-section.component.scss',
})
export class BannerSectionComponent {
  @Input() imageUrl: string = '/assets/images/lawyer-signing-2.webp';
}
