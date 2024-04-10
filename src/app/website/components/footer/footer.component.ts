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
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.initMap()
    }
  }

  initMap() {
    const loader = new Loader({
      apiKey: 'AIzaSyDo75I8yn8s-w3k88ZKtzSeUtbnC9Huh-M',
      version: 'weekly',
    });

    const element = this;

    (async function () {
      const { Map } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = (await loader.importLibrary('marker'));

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
    mapId: '44527b7e59b94241',
    center: this.companyPosition,
    zoom: 17,
  };

  markerOptions = {
    title: 'Control Legal',
    position: this.companyPosition,
  };
}
