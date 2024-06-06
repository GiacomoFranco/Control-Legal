import { Component } from '@angular/core';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { ExpertiseSectionComponent } from '@app/website/shared/expertise-section/expertise-section.component';
import { LegalServicesSectionComponent } from '@app/website/shared/legal-services-section/legal-services-section.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AskAQuestionComponent, LegalServicesSectionComponent, ExpertiseSectionComponent],
  templateUrl: './legal-services.component.html',
  styleUrl: './legal-services.component.scss',
})
export class LegalServicesComponent {}
