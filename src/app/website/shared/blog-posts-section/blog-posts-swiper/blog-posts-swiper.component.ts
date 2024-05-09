import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { Post } from '@app/website/interfaces/post.interface';
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperControlsComponent } from '../../swiper-controls/swiper-controls.component';
import { BlogPostCardComponent } from '../blog-posts-card/blog-post-card.component';

@Component({
  selector: 'app-blog-posts-swiper',
  standalone: true,
  imports: [SwiperControlsComponent, BlogPostCardComponent],
  template: `
    <app-swiper-controls [hidden]="!allowControls" [swiperID]="swiperID" />

    <div class="swiper" [id]="swiperID">
      <div class="swiper-wrapper">
        @for (post of posts; track $index) {
        <app-blog-post-card class="swiper-slide" [post]="post" />
        }
      </div>
    </div>
  `,
  styleUrl: './blog-posts-swiper.component.scss',
})
export class BlogPostsSwiperComponent {
  constructor(private readonly cd: ChangeDetectorRef) {}

  @Input() posts: Post[] | undefined = undefined;

  swiper: Swiper;
  swiperID: string = 'posts';
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
        800: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1470: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
      on: {
        afterInit: (swiperInit) => {
          var slidesPerView = swiperInit.params.slidesPerView;
          this.allowControls =
            typeof slidesPerView === 'number' &&
            slidesPerView < this.posts.length;
          swiperInit.off('afterInit');
          this.cd.detectChanges();
        },
        breakpoint: (swiperInit) => {
          var slidesPerView = swiperInit.params.slidesPerView;
          this.allowControls =
            typeof slidesPerView === 'number' &&
            slidesPerView < this.posts.length;
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
      // this.swiper.off('breakpoint');
    }
  }
}
