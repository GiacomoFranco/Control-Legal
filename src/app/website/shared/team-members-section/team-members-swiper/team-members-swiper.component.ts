import { AfterViewInit, Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { SwiperControlsComponent } from '../../swiper-controls/swiper-controls.component';
import { Autoplay, Navigation} from 'swiper/modules';
import Swiper from 'swiper';
import { Member } from '@app/website/interfaces/member.interface';

@Component({
  selector: 'app-team-members-swiper',
  standalone: true,
  imports: [TeamMemberCardComponent, SwiperControlsComponent],
  template: `
    <app-swiper-controls [swiperID]="swiperID" />

    <div class="swiper" [id]="swiperID">
      <div class="swiper-wrapper">
        @for (member of members; track $index) {
        <app-team-member-card class="swiper-slide" [member]="member" />
        }
      </div>
    </div>
  `,
  styleUrl: './team-members-swiper.component.scss',
})
export class TeamMembersSwiperComponent implements AfterViewInit {
  @Input() members: Member[] | undefined = undefined;

  platformId = inject(PLATFORM_ID);
  swiperID: string = 'members';

  initSwiper(): void {
    const swiper: Swiper = new Swiper('.swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: `#${this.swiperID}-next-control`,
        prevEl: `#${this.swiperID}-prev-control`,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1300: {
          slidesPerView: 4,
          slidesPerGroup: 4,
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
