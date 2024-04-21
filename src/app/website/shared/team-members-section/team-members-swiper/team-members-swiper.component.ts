import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { SwiperControlsComponent } from '../../swiper-controls/swiper-controls.component';
import { Autoplay, Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import { Member } from '@app/website/interfaces/member.interface';

@Component({
  selector: 'app-team-members-swiper',
  standalone: true,
  imports: [TeamMemberCardComponent, SwiperControlsComponent],
  template: `
    <app-swiper-controls [hidden]="!allowControls" [swiperID]="swiperID" />

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
export class TeamMembersSwiperComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly cd: ChangeDetectorRef) {}

  @Input() members: Member[] | undefined = undefined;

  swiper: Swiper;
  swiperID: string = 'members';
  allowControls: boolean;
  platformId: Object = inject(PLATFORM_ID);

  initSwiper(): void {
    this.swiper = new Swiper('.swiper', {
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
      on: {
        afterInit: (swiperInit) => {
          var slidesPerView = swiperInit.params.slidesPerView;
          this.allowControls =
            typeof slidesPerView === 'number' &&
            slidesPerView < this.members.length;
          swiperInit.off('afterInit');
          this.cd.detectChanges();
        },
        breakpoint: (swiperInit) => {
          var slidesPerView = swiperInit.params.slidesPerView;
          this.allowControls =
            typeof slidesPerView === 'number' &&
            slidesPerView < this.members.length;
          this.cd.detectChanges();
        },
      },
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper.off('breakpoint');
    }
  }
}
