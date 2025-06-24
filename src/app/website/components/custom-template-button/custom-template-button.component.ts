import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, input, TemplateRef } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-custom-template-button',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './custom-template-button.component.html',
  styleUrl: './custom-template-button.component.scss',
})
export class CustomTemplateButtonComponent {
  // initialTemplate = input.required<TemplateRef<any>>(); //How can i turn this to any?
  @Input({ required: true }) initialTemplate: TemplateRef<any>;
  @Input({ required: true }) loadingTemplate: TemplateRef<any>;
  @Input({ required: true }) doneTemplate: TemplateRef<any>;
  currentTemplate: TemplateRef<any>;
  $action = timer(2000);

  ngOnInit() {
    this.currentTemplate = this.initialTemplate;
  }

  performAction(e: Event) {
    e.preventDefault()
    this.currentTemplate = this.loadingTemplate;
    this.$action.subscribe(() => {
      this.currentTemplate = this.doneTemplate;
    });
  }
}
