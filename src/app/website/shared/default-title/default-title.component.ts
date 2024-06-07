import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-title',
  standalone: true,
  imports: [],
  template: `
    <section class="title">
      <article class="section-container">
        <div class="content">
          <div class="title-element">
            <h1>{{ title }}</h1>
            <hr />
          </div>
        </div>
      </article>
    </section>
  `,
  styleUrl: './default-title.component.scss',
})
export class DefaultTitleComponent {
  @Input() title: string;
}
