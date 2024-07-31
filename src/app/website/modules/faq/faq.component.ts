import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { DefaultTitleComponent } from '@app/website/shared/default-title/default-title.component';
import { QuestionComponent } from '@app/website/shared/questions-group/question/question.component';
import { QuestionsGroupComponent } from '@app/website/shared/questions-group/questions-group.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    DefaultTitleComponent,
    QuestionsGroupComponent,
    QuestionComponent,
    AskAQuestionComponent,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  constructor(viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 160]);
  }

  questionsGroups = [
    {
      fragment: 'generales',
      title: 'Generales',
      questionsGroup: [
        {
          question: '¿Dónde puedo ver información sobre procesos judiciales?',
          answer:
            'El estado de los procesos judiciales, pueden ser consultados por cualquier persona, bien sea con el nombre completo de alguno de los sujetos del proceso o bien con el número de radicado, estas consultas podrán realizarse directamente en la página web de la Rama Judicial, en el siguiente enlace: <a href="https://consultaprocesos.ramajudicial.gov.co/procesos/Index" target="_blank">https://consultaprocesos.ramajudicial.gov.co/procesos/Index<a/>',
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
      ],
    },
    {
      fragment: 'derecho-laboral-seguridad-social-y-pensiones',
      title: 'Derecho Laboral, Seguridad Social y Pensiones',
      questionsGroup: [
        {
          question:
            '¿Cómo se aplica la reducción en la jornada laboral contemplada en La Ley 2101 de 2021?',
          answer:
            'La Ley 2101 de 2021 expedida el 15 de julio del 2021, modificó el artículo 161 del Código Sustantivo del Trabajo reduciendo la jornada máxima de 48 a 42 horas semanales, con una implementación gradual esto con el fin de no afectar la productividad de las empresas. <br><br> <b>1.</b> En el 2023 a Dos (2) años a partir de la entrada en vigencia de la ley, se reducirá una (1) hora de la jornada laboral semanal, quedando en 47 horas semanales. <br><br><b>2.</b> En el 2024 Pasados tres (3) años de la entrada en vigencia de la ley, se reducirá otra hora de la jornada laboral semanal, quedando en 46 horas semanales. <br><br><b>3.</b> Del 2025 en adelante A partir del cuarto año de la entrada en vigencia de la ley, se reducirán dos (2) horas cada ano hasta Ilegar a las cuarenta y dos (42) horas semanales, conforme a lo establecido en el Artículo 2 de la presente ley.',
        },
        {
          question:
            '¿Actualmente cual es la edad requerida para obtener la pensión de vejez en Colombia?',
          answer:
            'La edad para pensionarse en Colombia es de 57 años para las mujeres y 62 años para los hombres, siempre que hayan cotizado las semanas mínimas requeridas para obtenerla.',
        },
        {
          question:
            '¿Tengo derecho a que mi empleador me afilie a la seguridad social si trabajo por días?',
          answer:
            'Todo empleado en el territorio colombiano tiene derecho a que se le garantice ser afiliado al sistema general de seguridad social y pensiones, generándole cobertura en salud y riesgos de invalidez, mediante cotizaciones periódicas que debe realizar el empleador a las entidades de afiliación, así mismo tiene derecho a ser afiliado ante administradoras de riesgos laborales, para cubrir eventualidades derivadas de la actividad laboral.',
        },
      ],
    },
    {
      fragment: 'derecho-de-familia',
      title: 'Derecho de Familia',
      questionsGroup: [
        {
          question: '¿Quiénes tienen derecho a recibir cuota alimentaria?',
          answer:
            'No solo los hijos tienen derecho a recibir una cuota alimentaria de sus padres, también los padres, los abuelos y hermanos tienen derecho a recibir alimentos por parte de sus familiares en el marco del cumplimiento de unos requisitos establecidos por la ley, partiendo de la necesidad del beneficiario y de la capacidad que tenga el alimentante en proporcionarle el apoyo. <br><br> Se puede definir el pago de una cuota alimentaria a través de la conciliación extrajudicial o a través de un proceso judicial para la fijación de cuota alimentaria. <br><br>Se debe alimentos también al cónyuge en casos especiales contemplados por la ley.',
        },
        {
          question: '¿Qué es la impugnación de paternidad? ',
          answer:
            'Según el artículo 213 del Código Civil, la paternidad se presume por el simple hecho del nacimiento del hijo concebido durante el matrimonio o la unión marital de hecho, sin embargo, esto puede ser objeto de impugnación, a través de un proceso judicial que se funda en lo dispuesto en el artículo 214 y siguientes del Código Civil. Este proceso puede ser adelantado por la madre o su cónyuge o compañero permanente que precisamente se presume padre y deben cumplirse determinados requisitos legales para su viabilidad.',
        },
        {
          question: '¿Cómo se tramita un divorcio?',
          answer:
            'El divorcio es un proceso mediante el cual se disuelve el vínculo entre cónyuges y que tiene como consecuencia la cesación de todos los efectos legales que conlleva el matrimonio, este tramite puede surtirse de dos formas. La primera es si hay mutuo acuerdo entre los cónyuges, en este caso se tramitará a través de abogado ante notaría, pudiendo acordarse los términos en los cuales se dará la disolución y se procederá de la misma manera a la liquidación de la sociedad conyugal. En segundo lugar, al no haber común acuerdo entre los cónyuges, deberá tramitarse a través de demanda ante un juez, proceso que podrá iniciar cualquiera de los cónyuges invocando las causales advertidas en la legislación colombiana, procediendo un juez a decidir sobre la disolución del vinculo matrimonial y si se solicita sobre la liquidación de la sociedad conyugal.',
        },
      ],
    },
    {
      fragment: 'derecho-penal',
      title: 'Derecho Penal',
      questionsGroup: [
        {
          question: '¿Qué es el principio de oportunidad?',
          answer:
            'El principio de oportunidad es la posibilidad que tiene la Fiscalía General de la Nación, para suspender, interrumpir o renunciar a la persecución penal en contra de una persona que haya cometido un delito, para dar aplicación a esta figura se debe dar cumplimiento a unos requisitos establecidos por la ley y se debe propender por una adecuada reparación a las victimas del posible delito.',
        },
        {
          question: '¿Qué es la libertad condicional?',
          answer:
            'La libertad condicional es una medida o beneficio aplicable a las personas que hayan sido condenadas por la comisión de un delito y que se haya dispuesto el cumplimiento de su pena en privación de la libertad, pudiendo a través de este beneficio quedar en libertad antes de finalizar el cumplimiento total de la pena, para acceder a este beneficio se debe cumplir unos requisitos dispuestos por la normatividad penal, entre los cuales encontramos que se debe haber observado buen comportamiento durante el tiempo de reclusión y haber cumplido al menos tres quintas partes de su pena.',
        },
      ],
    },
  ];
}
