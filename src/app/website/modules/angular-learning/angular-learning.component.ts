import { ChangeDetectorRef, Component, effect, inject, QueryList, signal, untracked, ViewChild, viewChildren, ViewChildren, WritableSignal } from '@angular/core';
import { CategoryTagComponent } from '@app/website/shared/category-tag/category-tag.component';
import { SubmitButtonComponent } from '@app/website/shared/form/submit-button/submit-button.component';

@Component({
  selector: 'app-angular-learning',
  standalone: true,
  imports: [SubmitButtonComponent, CategoryTagComponent],
  templateUrl: './angular-learning.component.html',
  styleUrl: './angular-learning.component.scss',
})
export class AngularLearningComponent {
  counterSignal: WritableSignal<number> = signal(0);
  anotherCounter: WritableSignal<number> = signal(0);
  savingVar: boolean;

  detector = inject(ChangeDetectorRef);

  @ViewChild(CategoryTagComponent) tag: CategoryTagComponent;
  // @ViewChildren(CategoryTagComponent) tags: CategoryTagComponent[];
  // @ViewChildren(CategoryTagComponent) tags: QueryList<CategoryTagComponent>;
  tags = viewChildren(CategoryTagComponent)


  getTagComponent() {
    console.log(this.tags());
    // this.tag.alertSomething()
  }

  forceDetection() {
    this.detector.detectChanges();
  }

  modifyDOM() {
    document.getElementById('test').innerHTML = 'Haiii';
  }

  // addToCounter(): void {
  //   this.counterSignal.update((value) => ++value);
  // }

  // addToOtherOne(): void {
  //   this.anotherCounter.update((value) => ++value);
  // }

  // effectName = effect(() => {
  //   console.log(`triggered`);
  //   console.log(`The count is: ${this.counterSignal()}`);
  //   untracked(() => {
  //     console.log(`The count is: ${this.anotherCounter()}`);
  //   });
  // });

  // cancelEffect(): void {
  //   this.effectName.destroy();
  // }
}
