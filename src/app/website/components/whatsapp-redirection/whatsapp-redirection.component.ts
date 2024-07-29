import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-redirection',
  standalone: true,
  imports: [],
  template: `
    <a href="https://wa.link/ln7teb" class="whatsapp-redirection" target="_blank">
      <img src="/assets/icons/whatsapp-icon.svg" alt="Whatsapp Logo" />
    </a>
  `,
  styles: `
    .whatsapp-redirection {
      position: fixed;
      bottom: 1.9em;
      right: 1.9rem;
      z-index: 100;
      background-color: #063135;
      width: 5rem;
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  `,
})
export class WhatsappRedirectionComponent {}
