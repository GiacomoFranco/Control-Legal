import { Component } from '@angular/core';
import { IndicatorsComponent } from '@app/website/shared/indicators/indicators.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [IndicatorsComponent],
  template: `
    <section class="metrics">
      <div class="section-container">
        <div class="content">
          <app-indicators />
          <div class="text-element">
            <p>
              Ofrecemos soluciones legales personalizadas y efectivas para
              nuestros clientes. Contamos con un equipo de abogados altamente
              capacitados y especializados en distintas áreas del derecho,
              estamos comprometidos con la excelencia.
            </p>
            <p>
              Nos dedicamos a proteger sus derechos e intereses y brindarle un
              servicio excepcional en cada etapa de su proceso legal. su buscas
              un abogado confiable y comprometido con tus necesidades, ¡aquí
              estamos para ayudarte!
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './metrics.component.scss',
})
export class MetricsComponent {}
