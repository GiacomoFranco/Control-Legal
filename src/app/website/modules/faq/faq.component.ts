import { Component } from '@angular/core';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [DefaultTitleComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
