import { Component } from '@angular/core';
import { MissionVisionCardComponent } from '../mission-vision-card/mission-vision-card.component';

@Component({
  selector: 'app-mission-vision-section',
  standalone: true,
  imports: [MissionVisionCardComponent],
  template: `
    <app-mission-vision-card
      title="Nuestra Misión"
      text="En Control Legal, nuestra misión es proporcionar asesoría jurídica empresarial de excelencia, enfocada en el desarrollo y gestión de políticas de seguridad jurídica empresarial, que protejan y fortalezcan los negocios en un entorno dinámico y desafiante. Nos dedicamos a ofrecer soluciones legales personalizadas y efectivas, que no solo prevengan riesgos y conflictos, sino que también promuevan la integridad y el crecimiento sostenible de nuestros clientes."
    />
    <app-mission-vision-card
      title="Nuestra Visión"
      text="Nuestra visión es ser la marca de asesoría jurídica empresarial líder en la creación de políticas de seguridad jurídica, reconocida por nuestra capacidad para anticipar, entender y resolver los desafíos legales que enfrentan las empresas modernas. Aspiramos a establecer un estándar de excelencia en el asesoramiento jurídico, siendo el socio preferido para empresas que buscan no solo protección legal, sino también un asesoramiento estratégico que impulse su éxito a largo plazo. En Control Legal, nos esforzamos por innovar continuamente y adaptar nuestras soluciones para satisfacer las necesidades cambiantes de un entorno empresarial global."
      [lightCard]="true"
    />
  `,
  styleUrl: './mission-vision-section.component.scss',
})
export class MissionVisionSectionComponent {}
