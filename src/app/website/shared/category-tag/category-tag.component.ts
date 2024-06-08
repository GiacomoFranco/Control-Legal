import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-tag',
  standalone: true,
  imports: [],
  template: `
    <span class="category-tag" [class.secondary-variation]="secondary">{{
      category
    }}</span>
  `,
  styles: `
    :host {
      width: fit-content;

      .category-tag {
        display: flex;
        border-radius: 99rem;
        padding: 0.9rem 1.6rem;
        background-color: var(--main-black);
        color: var(--light-green);
        font-size: var(--fs-100);
        width: fit-content;
        font-weight: 500;
        cursor: pointer;
      }

      .secondary-variation {
        background-color: var(--light-green);
        color: var(--main-black);
      }
    }
  `,
})
export class CategoryTagComponent {
  @Input() category: string;
  @Input() secondary: boolean = false;
}
