import { Component } from '@angular/core';

@Component({
  selector: 'app-section-introduction',
  standalone: true,
  imports: [],
  template: `
    <section class="section-introduction">
      <article class="section-container">
        <div class="content">
          <ng-content select="h2"></ng-content>
          <ng-content select="p"></ng-content>
        </div>
      </article>
    </section>
  `,
  styleUrl: './section-introduction.component.scss',
})
export class SectionIntroductionComponent {}
