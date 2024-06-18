import { Component } from '@angular/core';
import { MissionVisionCardComponent } from '../mission-vision-card/mission-vision-card.component';

@Component({
  selector: 'app-mission-vision-section',
  standalone: true,
  imports: [MissionVisionCardComponent],
  template: `
    <app-mission-vision-card
      title="Nuestra Misión"
      text="Nuestro personal está altamente capacitado para garantizar la más alta calidad en la prestación del servicio y por esto, continuamos en formación constante para ser cada vez mejores. Nuestro personal está altamente capacitado para garantizar la más alta calidad en la prestación del servicio y por esto, continuamos en formación constante para ser cada vez mejores."
    />
    <app-mission-vision-card
      title="Nuestra Visión"
      text="Sebastián Pérez Monsalve es reconocido como un destacado abogado especialista en derecho procesal penal, cuyo compromiso con la excelencia y la justicia ha dejado una huella indeleble en el ámbito legal. Con una sólida formación académica y una vasta experiencia en el campo, Pérez Monsalve se ha destacado como líder en el área de derecho penal y derecho público."
      [lightCard]="true"
    />
  `,
  styleUrl: './mission-vision-section.component.scss',
})
export class MissionVisionSectionComponent {}
