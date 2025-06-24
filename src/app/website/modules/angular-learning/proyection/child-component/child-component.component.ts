import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { CategoryTagComponent } from '@app/website/shared/category-tag/category-tag.component';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @ContentChild('content') child: ChildComponentComponent;
  @ContentChild(CategoryTagComponent) tag: CategoryTagComponent;
  @ContentChildren(CategoryTagComponent) tags: QueryList<CategoryTagComponent>

  ngAfterContentInit() {
    console.log(this.tags.toArray());
    this.tags.changes.subscribe(() => {
      console.log('changed');
    })
  }
}
