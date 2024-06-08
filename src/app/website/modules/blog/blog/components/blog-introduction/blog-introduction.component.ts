import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-introduction',
  standalone: true,
  imports: [],
  template: `
    <section class="blog-introduction">
      <article class="section-container">
        <div class="content">
          <h2>
            Recursos Legales para una <span class="highlight-text">Mejor Orientación y Empoderamiento.</span>
          </h2>
          <p>
            Ofrecemos soluciones legales personalizadas y efectivas para
            nuestros clientes. Contamos con un equipo de abogados altamente
            capacitados y especializados en distintas áreas del derecho, estamos
            comprometidos con la excelencia. <br><br> Nos dedicamos a proteger sus
            derechos e intereses y brindarle un servicio excepcional en cada
            etapa de su proceso legal.
          </p>
        </div>
      </article>
    </section>
  `,
  styleUrl: './blog-introduction.component.scss',
})
export class BlogIntroductionComponent {}
