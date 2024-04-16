import { AfterViewInit, Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { SwiperControlsComponent } from '../../swiper-controls/swiper-controls.component';
import { Navigation} from 'swiper/modules';
import Swiper from 'swiper';

@Component({
  selector: 'app-team-members-swiper',
  standalone: true,
  imports: [TeamMemberCardComponent, SwiperControlsComponent],
  templateUrl: './team-members-swiper.component.html',
  styleUrl: './team-members-swiper.component.scss',
})
export class TeamMembersSwiperComponent implements AfterViewInit {
  @Input() members: object[] | undefined = undefined;

  platformId = inject(PLATFORM_ID);
  swiperID: string = "members"

  initSwiper(): void {
    const swiper: Swiper = new Swiper('.swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: `#${this.swiperID}-next-control`,
        prevEl: `#${this.swiperID}-prev-control`,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }
}
