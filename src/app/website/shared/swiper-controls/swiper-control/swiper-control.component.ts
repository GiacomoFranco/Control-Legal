import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-control',
  standalone: true,
  imports: [],
  template: ` <img src="/assets/icons/arrow-xy.svg" [alt]="altImg" /> `,
  styleUrl: './swiper-control.component.scss',
})
export class SwiperControlComponent {
  @Input('altImg') altImg: string;
}
