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
        @for (breadcrumb of breadcrumbs; track $index;) {
        @if(isLastIndex(breadcrumbs, $index)){
        <label>{{ breadcrumb.label }}</label>
        } @else {
        <a [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</a>
        <img src="assets/icons/arrow-right-breadcrumb.svg" alt="Dirección breadcrumb" />
        } }
      </nav>
    </section>
  `,
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  @Input() slug: string;
  breadcrumbs: Array<{ label: string; url?: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  isLastIndex(
    array: Array<{ label: string; url?: string }>,
    index: number
  ): boolean {
    return array.length === index + 1;
  }

  ngOnInit(): void {
    this.breadcrumbs = [
      ...this.breadcrumbService.breadcrumbs,
      { label: this.slug },
    ];
  }
}
