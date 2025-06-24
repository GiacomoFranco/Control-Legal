import { Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  // @Input() set appHighlight(element: string) {
  //   this.element.nativeElement.style.backgroundColor = 'yellow'
  // };

  @HostBinding('style.backgroundColor') bgColor = 'yellow';
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '#BFC';
  }
}
