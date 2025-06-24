import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermiso]',
  standalone: true,
})
export class PermisoDirective {
  // consultar forma con signals
  @Input('appPermiso') rolesPermitidos!: string | string[];

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {}

  // consultar forma con signals
  @Input() set rolActual(rol: string) {
    const roles = typeof this.rolesPermitidos === 'string' ? [this.rolesPermitidos] : this.rolesPermitidos

    if (roles.includes(rol)) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }
}
