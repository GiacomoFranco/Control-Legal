import { Component, Input } from '@angular/core';
import { SwiperControlComponent } from './swiper-control/swiper-control.component';

@Component({
  selector: 'app-swiper-controls',
  standalone: true,
  imports: [SwiperControlComponent],
  template: `
    <app-swiper-control class="prev" [id]="swiperID + '-prev-control'" [altImg]="'Botón grupo previo'"/>
    <app-swiper-control class="next" [id]="swiperID + '-next-control'" [altImg]="'Botón grupo siguiente'"/>
  `,
  styleUrl: './swiper-controls.component.scss',
})
export class SwiperControlsComponent {
  @Input() swiperID: string;
}
