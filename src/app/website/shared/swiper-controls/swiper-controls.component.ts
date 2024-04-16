import { Component, Input } from '@angular/core';
import { SwiperControlComponent } from './swiper-control/swiper-control.component';

@Component({
  selector: 'app-swiper-controls',
  standalone: true,
  imports: [SwiperControlComponent],
  template: `
    <app-swiper-control class="prev" [id]="swiperID + '-prev-control'"/>
    <app-swiper-control class="next" [id]="swiperID + '-next-control'"/>
  `,
  styleUrl: './swiper-controls.component.scss',
})
export class SwiperControlsComponent {
  @Input() swiperID: string;
}
