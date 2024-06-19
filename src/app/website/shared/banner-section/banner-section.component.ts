import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="banner-section">
      <img class="background-image" [src]="imageUrl" alt="Abogados Control Legal" />
      <img class="logo" src="/assets/icons/logo-control-legal.svg" alt="Control Legal Logo">
      <div class="mask" [ngStyle]="{'background-color': maskColor, 'opacity': maskOpacity}"></div>
    </div>
  `,
  styleUrl: './banner-section.component.scss',
})
export class BannerSectionComponent {
  @Input() imageUrl: string = '/assets/images/lawyer-signing-2.webp';
  @Input() maskColor: string = '#0D2628';
  @Input() maskOpacity: string | number = '.86';
}
