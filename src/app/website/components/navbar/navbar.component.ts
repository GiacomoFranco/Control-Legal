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
  @Output() openedMenu = new EventEmitter();

  openMenu: boolean = false;

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
    this.openedMenu.emit(this.openMenu);
  }
}
