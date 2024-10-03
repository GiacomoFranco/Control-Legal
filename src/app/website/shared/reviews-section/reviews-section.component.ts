import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.scss',
})
export class ReviewsSectionComponent {
  reviews = [
    {
      id: 223,
      slug: 'daniel-monsalve',
      client: 'Daniel Monsalve',
      client_position: 'Globant CEO',
      client_review:
        '<p>Al buscar asesoría legal, encontré en este equipo un verdadero alivio. Su enfoque práctico y comprensivo resolvió mis problemas legales, brindándome la tranquilidad necesaria. Su conocimiento profundo y atención personalizada hicieron el proceso más fácil. Recomiendo sus servicios a quienes buscan asesoramiento legal confiable y eficiente.</p>\n',
      rating: '5',
      photos: [
        {
          url: 'https://admin.controllegalcl.com/wp-content/uploads/2024/04/andres-rodriguez.webp',
          alt: 'Abogado Andrés Rodriguez',
        },
      ],
    },
    {
      id: 223,
      slug: 'daniel-monsalve',
      client: 'Daniel Monsalve',
      client_position: 'Globant CEO',
      client_review:
        '<p>Al buscar asesoría legal, encontré en este equipo un verdadero alivio. Su enfoque práctico y comprensivo resolvió mis problemas legales, brindándome la tranquilidad necesaria. Su conocimiento profundo y atención personalizada hicieron el proceso más fácil. Recomiendo sus servicios a quienes buscan asesoramiento legal confiable y eficiente.</p>\n',
      rating: '5',
      photos: [
        {
          url: 'https://admin.controllegalcl.com/wp-content/uploads/2024/04/andres-rodriguez.webp',
          alt: 'Abogado Andrés Rodriguez',
        },
      ],
    },
    {
      id: 223,
      slug: 'daniel-monsalve',
      client: 'Daniel Monsalve',
      client_position: 'Globant CEO',
      client_review:
        '<p>Al buscar asesoría legal, encontré en este equipo un verdadero alivio. Su enfoque práctico y comprensivo resolvió mis problemas legales, brindándome la tranquilidad necesaria. Su conocimiento profundo y atención personalizada hicieron el proceso más fácil. Recomiendo sus servicios a quienes buscan asesoramiento legal confiable y eficiente.</p>\n',
      rating: '5',
      photos: [
        {
          url: 'https://admin.controllegalcl.com/wp-content/uploads/2024/04/andres-rodriguez.webp',
          alt: 'Abogado Andrés Rodriguez',
        },
      ],
    },
  ];
}
