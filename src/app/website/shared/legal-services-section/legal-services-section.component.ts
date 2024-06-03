import { Component, Input, OnInit, input } from '@angular/core';
import { LegalServicesCardComponent } from './legal-services-card/legal-services-card.component';

@Component({
  selector: 'app-legal-services-section',
  standalone: true,
  imports: [LegalServicesCardComponent],
  template: `
    <section class="legal-services">
      <div class="section-container">
        <div class="content">
          @if (!servicesView) {
            <div class="title-element">
              <h2>
                Explorando nuestros servicios,
                <span class="highlight-text"
                  >soluciones legales de calidad</span
                >
                garantizada para ti.
              </h2>
            </div>
          }
          <div class="legal-services-element">
            <div class="top-row">
              @for (service of services; track $index) {
                <app-legal-services-card
                  [imageUrl]="service.image"
                  [serviceName]="service.name"
                  [serviceSlug]="service.redirection"
                />
              }
            </div>
            <div class="bottom-row">
              @if (!servicesView) {
                <app-legal-services-card
                  [imageUrl]="servicesBottom.image"
                  [serviceName]="servicesBottom.name"
                  [serviceSlug]="servicesBottom.redirection"
                />
                <app-legal-services-card />
              } @else {
                @for (service of servicesBottom; track $index) {
                  <app-legal-services-card
                    [imageUrl]="service.image"
                    [serviceName]="service.name"
                    [serviceSlug]="service.redirection"
                  />
                }
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './legal-services-section.component.scss',
})
export class LegalServicesSectionComponent implements OnInit {
  ngOnInit(): void {
    if (this.servicesView) {
      this.services = [
        {
          name: 'Derecho Civil, Comercial y de Familia',
          image: '/assets/images/familiar.webp',
          redirection: 'derecho-civil-comercial-y-de-familia',
        },
        {
          name: 'Derecho penal y penitenciario',
          image: '/assets/images/penal.webp',
          redirection: 'derecho-penal-y-penitenciario',
        },
      ];

      this.servicesBottom = [
        {
          name: 'Derecho empresarial',
          image: '/assets/images/empresarial.webp',
          redirection: 'derecho-empresarial',
        },
        {
          name: 'Derecho laboral y pensional',
          image: '/assets/images/laboral.webp',
          redirection: 'derecho-laboral-y-pensional',
        },
      ];
    } else {
      this.services = [
        {
          name: 'Derecho Civil, Comercial y de Familia',
          image: '/assets/images/familiar.webp',
          redirection: 'derecho-civil-comercial-y-de-familia',
        },
        {
          name: 'Derecho penal y penitenciario',
          image: '/assets/images/penal.webp',
          redirection: 'derecho-penal-y-penitenciario',
        },
        {
          name: 'Derecho empresarial',
          image: '/assets/images/empresarial.webp',
          redirection: 'derecho-empresarial',
        },
      ];

      this.servicesBottom = {
        name: 'Derecho laboral y pensional',
        image: '/assets/images/laboral.webp',
        redirection: 'derecho-laboral-y-pensional',
      };
    }
  }

  @Input() servicesView: boolean = false;
  services: any[];
  servicesBottom: any;
}
