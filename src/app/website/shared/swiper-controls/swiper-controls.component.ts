import { Component, Input } from '@angular/core';
import { SwiperControlComponent } from './swiper-control/swiper-control.component';

@Component({
  selector: 'app-swiper-controls',
  standalone: true,
  imports: [SwiperControlComponent],
  templateUrl: './swiper-controls.component.html',
  styleUrl: './swiper-controls.component.scss',
})
export class SwiperControlsComponent {
  @Input() swiperID: string;
}
