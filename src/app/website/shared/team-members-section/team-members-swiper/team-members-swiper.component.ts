import { AfterViewInit, Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';

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

  swiper: Swiper  ;

  initSwiper(): void {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      autoHeight: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngAfterViewInit(): void {
    console.log(this.platformId);

    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }
}
