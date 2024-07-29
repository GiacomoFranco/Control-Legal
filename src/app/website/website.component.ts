import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from '@app/website/components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappRedirectionComponent } from './components/whatsapp-redirection/whatsapp-redirection.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    FooterComponent,
    WhatsappRedirectionComponent
  ],
  template: `
    <app-navbar
      [style.top]="hideNav ? '-12.8rem' : '0'"
      [style.background-color]="navbarBackground ? 'var(--main-black)' : 'transparent'"
    />
    <app-whatsapp-redirection />
    <router-outlet />
    <app-footer />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `,
})
export class WebsiteComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.navbarBackgroundOffset = this.currentRoute === '/' ? 125 : 0;
      }
    });
  }

  scrollTop = 0;
  hideNav = false;
  currentRoute: string;
  navbarBackgroundOffset: number;
  navbarBackground: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const isScrollingDown = scrollPosition > this.scrollTop;
    this.hideNav = isScrollingDown;
    this.scrollTop = scrollPosition;

    if (scrollPosition > this.navbarBackgroundOffset) {
      this.navbarBackground = true;
    } else {
      this.navbarBackground = false;
    }
  }
}
