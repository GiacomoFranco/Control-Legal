import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-services-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (serviceName) {
      <a [routerLink]="['/servicios', serviceSlug]">
        <div class="service-name">
          <p>{{ serviceName }}</p>
        </div>
        <img class="background-image" [src]="imageUrl" [alt]="serviceSlug" />
      </a>
    } @else {
      <a routerLink="/servicios">
        <div class="redirection-name">
          <img src="/assets/icons/redirection-arrow-green.svg" alt="Redirección" />
          <p>Estos son los servicios jurídicos que ofrecemos para ti</p>
        </div>
        <img
          class="background-image"
          src="/assets/images/legal-redirection.webp"
          alt="redirección"
        />
      </a>
    }
  `,
  styleUrl: './legal-services-card.component.scss',
})
export class LegalServicesCardComponent {
  @Input() imageUrl: string;
  @Input() serviceName: string;
  @Input() serviceSlug: string;
}
