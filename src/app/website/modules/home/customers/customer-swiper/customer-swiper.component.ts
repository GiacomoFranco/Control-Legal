import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { Customer } from '@app/website/interfaces/customer.interface';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-customer-swiper',
  standalone: true,
  imports: [],
  templateUrl: './customer-swiper.component.html',
  styleUrl: './customer-swiper.component.scss',
})
export class CustomerSwiperComponent {
  @Input() customersArray: Customer[][] | undefined = undefined;

  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }

  swiper: Swiper;
  swiperID: string = 'customers';
  allowControls: boolean;
  platformId: Object = inject(PLATFORM_ID);

  initSwiper(): void {
    this.swiper = new Swiper(`#${this.swiperID}`, {
      loop: true,
      modules: [Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 87.5,
      autoplay: {
        delay: 0,
      },
      speed: 90000,
      breakpoints: {
        800: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1470: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper.off('breakpoint');
    }
  }
}
