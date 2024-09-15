import {
  Component,
  Input,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { Customer } from '@app/website/interfaces/customer.interface';
import KeenSlider, { KeenSliderHooks } from 'keen-slider';

@Component({
  selector: 'app-customer-swiper',
  standalone: true,
  imports: [],
  templateUrl: './customer-swiper.component.html',
  styleUrl: './customer-swiper.component.scss',
})
export class CustomerSwiperComponent {
  @Input() customersArray: Customer[] | undefined = undefined;

  constructor() {
    afterNextRender(() => {
      this.initKeenSlider();
    });
  }

  platformId: Object = inject(PLATFORM_ID);

  keenSlider: KeenSliderHooks;
  keenSliderID: string = 'my-keen-slider';

  initKeenSlider(): void {
    var animation = { duration: 50000, easing: (t) => t };

    this.keenSlider = new KeenSlider('#my-keen-slider', {
      loop: true,
      renderMode: 'performance',
      drag: true,
      slides: {
        perView: 4,
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
  }
}
