import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Output, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  @Output() openedMenu = new EventEmitter();

  isNavbarResponsive: boolean;
  openMenu: boolean = false;

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
    this.openedMenu.emit(this.openMenu);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
    }
  }

  checkWindowSize() {
    this.isNavbarResponsive = this.document.defaultView.innerWidth <= 1150;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
    }
  }
}
