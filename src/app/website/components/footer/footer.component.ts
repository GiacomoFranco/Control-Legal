import { Component } from '@angular/core';

import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent{
}
