import { Component } from '@angular/core';
import { LegalServicesCardComponent } from './legal-services-card/legal-services-card.component';

@Component({
  selector: 'app-legal-services-section',
  standalone: true,
  imports: [LegalServicesCardComponent],
  template: `
    <section class="legal-services">
      <div class="section-container">
        <div class="content">
          <div class="title-element">
            <h2>
              Explorando nuestros servicios,
              <span class="highlight-text">soluciones legales de calidad</span>
              garantizada para ti.
            </h2>
          </div>
          <div class="legal-services-element">
            <div class="top-row">
              @for (service of services; track $index) {
                <app-legal-services-card
                  [imageUrl]="service.image"
                  [serviceName]="service.name"
                />
              }
            </div>
            <div class="bottom-row">
              <app-legal-services-card [imageUrl]="serviceBottom.image" [serviceName]="serviceBottom.name"/>
              <app-legal-services-card />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './legal-services-section.component.scss',
})
export class LegalServicesSectionComponent {
  services: any[] = [
    {
      name: 'Derecho Civil, Comercial y de Familia',
      image: '/assets/images/familiar.webp',
    },
    {
      name: 'Derecho penal y penitenciario',
      image: '/assets/images/penal.webp',
    },
    {
      name: 'Derecho laboral y pensional',
      image: '/assets/images/laboral.webp',
    },
  ];
  serviceBottom: any = {
    name: 'Derecho empresarial',
    image: '/assets/images/empresarial.webp',
  };
}
