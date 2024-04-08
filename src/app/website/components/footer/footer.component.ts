import { Component } from '@angular/core';
import { GoogleMap, MapAdvancedMarker  } from '@angular/google-maps';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  companyPosition = { lat: 6.1912182261743745, lng: -75.57700406318196 };

  options: google.maps.MapOptions = {
    center: this.companyPosition,
    zoom: 17,
  };

  markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {
    title: 'Control Legal',
    position: this.companyPosition,
  };
}
