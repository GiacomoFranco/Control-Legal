import { Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CategoryTagComponent } from '@app/website/shared/category-tag/category-tag.component';
import { SubmitButtonComponent } from '@app/website/shared/form/submit-button/submit-button.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { CustomTemplateButtonComponent } from "../../../components/custom-template-button/custom-template-button.component";

@Component({
  selector: 'app-proyection',
  standalone: true,
  imports: [ChildComponentComponent, CategoryTagComponent, SubmitButtonComponent, NgIf, CustomTemplateButtonComponent],
  templateUrl: './proyection.component.html',
  styleUrl: './proyection.component.scss',
})
export class ProyectionComponent {
  @ViewChild(CategoryTagComponent) element: CategoryTagComponent;

  changeTag() {
    this.element.category = 'Arroz con leche'
  }
}
