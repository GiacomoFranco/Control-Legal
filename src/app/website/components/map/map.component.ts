import { Component } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  readonly MAPS_API_KEY: string = import.meta.env['NG_APP_MAPS_API_KEY'];
  readonly FOOTER_MAP_ID: string = import.meta.env['NG_APP_FOOTER_MAP_ID'];
  readonly DEPLOY_URL: string = import.meta.env['NG_APP_DEPLOY_URL'];

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
      // @ts-ignore
      const { Place } = await google.maps.importLibrary('places');

      let map = new Map(
        document.getElementById('map') as HTMLElement,
        element.options
      );

      const glyphImg = document.createElement('img');
      glyphImg.src = `${element.DEPLOY_URL}assets/images/logo-control-legal-v2-black.svg`;

      const pinViewScaled = new google.maps.marker.PinElement({
        scale: 1.4,
        background: '#B4F6D0',
        borderColor: '#021C1E',
        glyph: glyphImg,
      });

      const marker = new AdvancedMarkerElement({
        map: map,
        position: element.companyPosition,
        title: 'Control Legal',
        content: pinViewScaled.element,
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
