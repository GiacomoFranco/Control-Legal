import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/website/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section>
      <nav class="section-container">
        @if (slug !== false && !slug) {
          <div class="skeleton">
            @for (item of skeletonArray; track $index) {
              <div></div>
            }
          </div>
        } @else {
          @for (breadcrumb of breadcrumbs; track $index) {
            @if (isLastIndex(breadcrumbs, $index)) {
              <label>{{ breadcrumb.label }}</label>
            } @else {
              <a [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</a>
              <img
                src="assets/icons/arrow-right-breadcrumb.svg"
                alt="Dirección breadcrumb"
              />
            }
          }
        }
      </nav>
    </section>
  `,
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  @Input() slug: string | boolean;
  skeletonArray = Array(4);

  breadcrumbs: Array<{ label: string; url?: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  isLastIndex(
    array: Array<{ label: string; url?: string }>,
    index: number,
  ): boolean {
    return array.length === index + 1;
  }

  ngOnInit(): void {
    //console.log(this.slug);

    this.breadcrumbs = [
      ...this.breadcrumbService.breadcrumbs,
      { label: typeof this.slug === 'string' ? this.slug : null },
    ];
  }
}
