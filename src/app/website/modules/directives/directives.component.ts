import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '@app/website/directives/highlight/highlight.directive';
import { PermisoDirective } from '@app/website/directives/permiso/permiso.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [PermisoDirective, FormsModule, HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  usuarios = [
    { nombre: 'Alice', rol: 'admin', estado: 'activo' },
    { nombre: 'Bob', rol: 'user', estado: 'pendiente' },
    { nombre: 'Charlie', rol: 'guest', estado: 'inactivo' },
  ];
  rolActual = 'user'; // controlable desde un select
}
