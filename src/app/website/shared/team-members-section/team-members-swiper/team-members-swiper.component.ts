import { AfterViewInit, Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-team-members-swiper',
  standalone: true,
  imports: [TeamMemberCardComponent],
  templateUrl: './team-members-swiper.component.html',
  styleUrl: './team-members-swiper.component.scss',
})
export class TeamMembersSwiperComponent implements AfterViewInit {
  @Input() members: object[] | undefined = undefined;

  platformId = inject(PLATFORM_ID);

  swiper: Swiper;

  initSwiper(): void {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
