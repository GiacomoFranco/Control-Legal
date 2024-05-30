import { Component } from '@angular/core';
import { RedirectionComponent } from '@app/website/shared/redirection/redirection.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RedirectionComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
