import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website/website.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WebsiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-legal';
}
