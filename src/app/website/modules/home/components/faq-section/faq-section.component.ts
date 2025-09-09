import { Component } from '@angular/core';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';
import { RedirectionComponent } from '@app/website/shared/redirection/redirection.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [QuestionsGroupComponent, QuestionComponent, RedirectionComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  questionsGroup: any = [
    {
      question: '¿Dónde puedo ver información sobre procesos judiciales?',
      answer:
        'El estado de los procesos judiciales, pueden ser consultados por cualquier persona, bien sea con el nombre completo de alguno de los sujetos del proceso o bien con el número de radicado, estas consultas podrán realizarse directamente en la página web de la Rama Judicial, en el siguiente enlace: <a href="https://consultaprocesos.ramajudicial.gov.co/procesos/Index" target="_blank">https://consultaprocesos.ramajudicial.gov.co/procesos/Index</a>',
    },
    {
      question: '¿Qué es la Conciliación en Derecho?',
      answer:
        'Es un mecanismo alternativo para dar solución a un conflicto, a través del cual, dos o mas personas naturales o jurídicas, gestionan por sí mismas, a través de un tercero imparcial conocido como conciliador, las diferencias o conflictos que tuvieren, buscando así, economía y celeridad.',
    },
    {
      question:
        '¿Qué es el régimen de insolvencia de persona natural no comerciante?',
      answer:
        '¿Qué es el régimen de insolvencia de persona natural no comerciante? La insolvencia de persona natural no comerciante es un procedimiento legal que permite a las personas someter a negociación sus deudas con sus acreedores, o a declararse en quiebra, permitiendo realizar acuerdos para normalizar su situación financiera. Este proceso trae algunos beneficios tales como la cesación de llamadas de cobro, la suspensión de procesos de embargo o remate de bienes, al igual que previene que ya los acreedores no puedan demandar al deudor, proporcionando también un blindaje económico para que los acreedores no puedan quitarle la fuente de su manutención. Para aplicar, debe cumplir unos requisitos: <br><br> 1. Tener 2 o más obligaciones atrasadas por más de 90 días. <br> 2. Que esas obligaciones atrasadas representen más del 50% de sus deudas. <br> 3. No estar registrado como comerciante o controlante de una sociedad o empresa.',
    },
  ];
}
