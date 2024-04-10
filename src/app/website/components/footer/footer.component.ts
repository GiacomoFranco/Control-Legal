import { AfterViewInit, Component } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  readonly MAPS_API_KEY: string = import.meta.env['NG_APP_MAPS_API_KEY'];
  readonly FOOTER_MAP_ID: string = import.meta.env['NG_APP_FOOTER_MAP_ID'];

  ngAfterViewInit(): void {

    if (typeof window !== 'undefined') {
      this.initMap();
    }
  }

  initMap() {
    const loader = new Loader({
      apiKey: this.MAPS_API_KEY,
      version: 'weekly',
    });

    const element = this;

    (async function () {
      const { Map } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = await loader.importLibrary('marker');

      let map = new Map(
        document.getElementById('map') as HTMLElement,
        element.options
      );

      const marker = new AdvancedMarkerElement({
        map: map,
        position: element.companyPosition,
        title: 'Control Legal',
      });
    })();
  }

  companyPosition = { lat: 6.1912182261743745, lng: -75.57700406318196 };

  options = {
    mapId: this.FOOTER_MAP_ID,
    center: this.companyPosition,
    zoom: 17,
  };

  markerOptions = {
    title: 'Control Legal',
    position: this.companyPosition,
  };
}
